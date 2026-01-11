import json

def finalize_words():
    # Load correctly translated words from words_db.json
    try:
        with open('words_db.json', 'r', encoding='utf-8') as f:
            words_data = json.load(f)
    except Exception as e:
        print(f"Error loading words_db.json: {e}")
        return

    print(f"Loaded {len(words_data)} corrected words.")

    # Convert to words.js format
    with open('words.js', 'w', encoding='utf-8') as f:
        f.write("const words = ")
        json.dump(words_data, f, ensure_ascii=False, indent=2)
        f.write(";")
    
    print("Successfully updated words.js")

if __name__ == "__main__":
    finalize_words()
