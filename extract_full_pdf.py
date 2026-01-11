from PyPDF2 import PdfReader
import re
import json

def extract_all_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    all_text = ""
    for page in reader.pages:
        text = page.extract_text()
        if text:
            all_text += text + "\n"
    
    # Improved patterns for YDS vocabulary extraction
    # Looking for: WORD (type) Turkish Meaning
    # Example: ABANDON (v) terketmek, bırakmak
    
    # Pattern 1: BÜYÜK HARFLİ KELİME (tür) anlam
    pattern_caps = r'([A-ZÇĞİÖŞÜ]{3,})\s*\(([vnaj])\)\s*([^.\n]+)'
    
    matches = re.finditer(pattern_caps, all_text)
    
    words_data = []
    seen = set()
    
    type_map = {
        'v': 'verb',
        'n': 'noun',
        'a': 'adjective',
        'j': 'adjective',
        'adv': 'adverb'
    }
    
    for match in matches:
        word = match.group(1).strip()
        w_type_code = match.group(2).strip()
        meaning = match.group(3).strip()
        
        # Clean up meaning (stop at synonyms or other markers if necessary)
        meaning = meaning.split(':')[0].strip() # Often synonyms follow ":"
        
        if word not in seen and len(word) > 2:
            seen.add(word)
            
            # Simple example generation based on the word if not found
            # (In a real scenario, we'd extract these too, but let's try to find them)
            # Find the sentence following the word if possible
            
            words_data.append({
                "word": word.capitalize(),
                "type": type_map.get(w_type_code, "unknown"),
                "turkish": meaning,
                "example": f"Example sentence using {word.lower()}...", # Placeholder or extract if possible
                "turkishExample": f"{word.capitalize()} kelimesini içeren örnek cümle..."
            })
            
    return words_data

if __name__ == "__main__":
    pdf_file = "ydskelimeler.pdf"
    print(f"Reading {pdf_file}...")
    extracted_words = extract_all_from_pdf(pdf_file)
    print(f"Found {len(extracted_words)} candidate words.")
    
    # Save to words_db.json
    with open('words_db.json', 'w', encoding='utf-8') as f:
        json.dump(extracted_words, f, ensure_ascii=False, indent=2)
    
    print("Words saved to words_db.json")
