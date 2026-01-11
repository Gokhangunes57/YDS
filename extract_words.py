from PyPDF2 import PdfReader
import re
import json

reader = PdfReader('ydskelimeler.pdf')

# Tüm metni topla
all_text = ''
for i in range(len(reader.pages)):
    text = reader.pages[i].extract_text()
    if text:
        all_text += text + '\n'

# Kelimeleri bul
pattern = r'([A-Z]{2,})\s*\(([vnaj])\)'
matches = re.findall(pattern, all_text)

words = []
seen = set()
for match in matches:
    word = match[0]
    word_type = match[1]
    if word not in seen:
        seen.add(word)
        type_map = {'v': 'verb', 'n': 'noun', 'a': 'adjective', 'j': 'adjective'}
        words.append({
            'word': word.lower().capitalize(),
            'type': type_map.get(word_type, 'unknown')
        })

print(f'Toplam {len(words)} benzersiz kelime bulundu')

# JSON olarak kaydet
with open('words_raw.json', 'w', encoding='utf-8') as f:
    json.dump(words, f, ensure_ascii=False, indent=2)

print('words_raw.json dosyasına kaydedildi')
print('İlk 50 kelime:')
for w in words[:50]:
    print(f"{w['word']} ({w['type']})")
