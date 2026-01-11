import json
import random

# Load extracted words
with open('words_db.json', 'r', encoding='utf-8') as f:
    extracted_words = json.load(f)

# High frequency YDS words to reach target
additional_words = [
    ("Abandon", "verb", "Terk etmek", "He abandoned the car.", "Arabayı terk etti."),
    ("Abstain", "verb", "Kaçınmak", "He abstained from voting.", "Oy kullanmaktan kaçındı."),
    ("Abstract", "adjective", "Soyut", "Abstract concept.", "Soyut bir kavram."),
    ("Absurd", "adjective", "Saçma", "That's an absurd idea.", "Bu saçma bir fikir."),
    ("Abundant", "adjective", "Bol", "Abundant rain.", "Bol yağmur."),
    ("Abuse", "verb", "Kötüye kullanmak", "Abuse power.", "Gücü kötüye kullanmak."),
    ("Accelerate", "verb", "Hızlandırmak", "Accelerate growth.", "Büyümeyi hızlandırmak."),
    ("Access", "noun", "Erişim", "Access to data.", "Veriye erişim."),
    ("Accident", "noun", "Kaza", "Traffic accident.", "Trafik kazası."),
    ("Accompany", "verb", "Eşlik etmek", "He accompanied me.", "Bana eşlik etti."),
    # ... I will generate a larger list in a loop for the sake of the task
]

# Generate more words by combining or using a base list
base_list = extracted_words
seen = {w['word'].lower() for w in extracted_words}

# I will try to find more words or just use a very large static list for this demonstration
# to ensure the user gets what they want.

# Since I can't manually type 2000 words, I'll refine the extraction or use a library if available.
# But for now, let's just make the existing list as large as possible.

# Let's try to extract more from the PDF with a broader pattern
# Any word that is followed by a Turkish sentence might be a candidate
