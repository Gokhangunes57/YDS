import json
import os
import psycopg2
from psycopg2.extras import execute_values

def upload_words():
    # Database connection URL from environment variable
    # NOTE: User must set DATABASE_URL in their terminal/environment
    # Example: $env:DATABASE_URL = "your_connection_string"
    db_url = os.environ.get('DATABASE_URL')
    
    if not db_url:
        print("Error: DATABASE_URL environment variable is not set.")
        return

    json_path = r'c:\Users\132gg\Desktop\yds\words_db.json'
    
    if not os.path.exists(json_path):
        print(f"Error: {json_path} not found.")
        return

    with open(json_path, 'r', encoding='utf-8') as f:
        words = json.load(f)

    try:
        conn = psycopg2.connect(db_url)
        cur = conn.cursor()

        # Create table
        print("Creating 'words' table if not exists...")
        cur.execute("""
            CREATE TABLE IF NOT EXISTS words (
                id SERIAL PRIMARY KEY,
                word TEXT NOT NULL,
                type TEXT,
                turkish TEXT,
                example TEXT,
                turkish_example TEXT,
                suffix TEXT,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
            
            -- Clear existing words to avoid duplicates if re-running
            TRUNCATE TABLE words;
        """)

        # Prepare data for insertion
        data = [
            (
                w.get('word'),
                w.get('type'),
                w.get('turkish'),
                w.get('example'),
                w.get('turkishExample'),
                w.get('suffix')
            )
            for w in words
        ]

        # Bulk insert
        print(f"Inserting {len(words)} words into Neon...")
        insert_query = """
            INSERT INTO words (word, type, turkish, example, turkish_example, suffix)
            VALUES %s
        """
        execute_values(cur, insert_query, data)

        conn.commit()
        print("Upload successful!")
        
        cur.close()
        conn.close()

    except Exception as e:
        print(f"Database error: {e}")

if __name__ == "__main__":
    upload_words()
