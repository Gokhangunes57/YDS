from PyPDF2 import PdfReader
import re
import json

def extract_mega(pdf_path):
    reader = PdfReader(pdf_path)
    all_text = ""
    for i, page in enumerate(reader.pages):
        text = page.extract_text()
        if text:
            all_text += text + "\n"
            
    # Very aggressive pattern: UPPERCASE_WORD (v/n/a/j/adv) meaning
    # Also look for numbered lists like 1. WORD
    patterns = [
        r'([A-ZÇĞİÖŞÜ]{2,})\s*\(([vnaj]d?v?)\)\s*([^\n.;:]+)',
        r'\d+\.\s*([A-ZÇĞİÖŞÜ]{3,})\s*:\s*([^\n;.]+)',
        r'([A-ZÇĞİÖŞÜ]{3,})\s*[:\-]\s*([^\n;.]+)'
    ]
    
    words_data = []
    seen = set()
    
    type_map = {
        'v': 'verb', 'n': 'noun', 'a': 'adjective', 'j': 'adjective',
        'adv': 'adverb', 'adj': 'adjective'
    }
    
    for p in patterns:
        matches = re.finditer(p, all_text)
        for m in matches:
            word = m.group(1).strip().capitalize()
            if word.lower() in seen or len(word) < 3:
                continue
                
            seen.add(word.lower())
            
            meaning = m.group(2).strip() if len(m.groups()) == 2 else m.group(3).strip()
            w_type = m.group(2).strip() if len(m.groups()) == 3 else "unknown"
            
            # Clean meaning
            meaning = re.split(r'[;:]', meaning)[0].strip()
            
            words_data.append({
                "word": word,
                "type": type_map.get(w_type, "word"),
                "turkish": meaning,
                "example": f"Please search for the usage of '{word.lower()}' in YDS contexts.",
                "turkishExample": f"'{word.capitalize()}' kelimesinin kullanımını YDS bağlamında inceleyin."
            })
            
    return words_data

if __name__ == "__main__":
    extracted = extract_mega("ydskelimeler.pdf")
    print(f"Total extracted: {len(extracted)}")
    
    # Writing directly to words.js format
    with open('words.js', 'w', encoding='utf-8') as f:
        f.write("const words = ")
        json.dump(extracted, f, ensure_ascii=False, indent=2)
        f.write(";")
    
    print("words.js updated with extracted data.")
