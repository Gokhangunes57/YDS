from PyPDF2 import PdfReader
import re
import json

def extract_hyper_detailed(pdf_path):
    reader = PdfReader(pdf_path)
    all_words = []
    seen = set()
    
    # Common YDS suffixes to help identify English words
    suffixes = ('tion', 'ment', 'able', 'ible', 'ness', 'ity', 'ship', 'ance', 'ence', 'ize', 'ise', 'ate', 'ful', 'less', 'ous')
    
    for page in reader.pages:
        text = page.extract_text()
        if not text: continue
        
        lines = text.split('\n')
        for line in lines:
            # Look for words at the start of lines that might be English
            # Pattern: Word (lowercase/uppercase) ... meaning
            match = re.search(r'^([a-zA-Z]{3,})\b', line)
            if match:
                word = match.group(1).capitalize()
                if word.lower() in seen: continue
                
                # Check if the rest of the line contains Turkish characters
                # or is likely a definition
                rest = line[len(word):].strip()
                if len(rest) > 2:
                    seen.add(word.lower())
                    all_words.append({
                        "word": word,
                        "type": "word",
                        "turkish": rest[:100], # Take start of definition
                        "example": f"Example sentence for {word.lower()}.",
                        "turkishExample": f"{word} için örnek cümle."
                    })
                    
    return all_words

if __name__ == "__main__":
    words = extract_hyper_detailed("ydskelimeler.pdf")
    print(f"Extracted {len(words)} words.")
    
    # Save top 2000 if we have them
    with open('words.js', 'w', encoding='utf-8') as f:
        f.write("const words = ")
        json.dump(words[:2500], f, ensure_ascii=False, indent=2)
        f.write(";")
