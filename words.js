const words = [
  {
    "word": "Deception",
    "type": "noun",
    "turkish": "Aldatma, hile, yanıltma",
    "example": "He was found guilty of obtaining money by deception.",
    "turkishExample": "Hile yoluyla para elde etmekten suçlu bulundu."
  },
  {
    "word": "Disperse",
    "type": "verb",
    "turkish": "Dağılmak, dağıtmak, yayılmak",
    "example": "The police used tear gas to disperse the crowd.",
    "turkishExample": "Polis kalabalığı dağıtmak için göz yaşartıcı gaz kullandı."
  },
  {
    "word": "Grasp",
    "type": "verb",
    "turkish": "Kavramak, anlamak, sıkıca tutmak",
    "example": "She failed to grasp the importance of the situation.",
    "turkishExample": "Durumun önemini kavrayamadı."
  },
  {
    "word": "Instill",
    "type": "verb",
    "turkish": "Aşılamak, yavaş yavaş öğretmek",
    "example": "It is important to instill good values in children from an early age.",
    "turkishExample": "Çocuklara küçük yaştan itibaren iyi değerler aşılamak önemlidir."
  },
  {
    "word": "Isolate",
    "type": "verb",
    "turkish": "Soyutlamak, tecrit etmek, ayırmak",
    "example": "Patients with the virus were isolated to prevent its spread.",
    "turkishExample": "Virüslü hastalar yayılmasını önlemek için tecrit edildi."
  },
  {
    "word": "Spoil",
    "type": "verb",
    "turkish": "Bozmak, şımartmak, çürümek",
    "example": "The tall building spoils the view of the valley.",
    "turkishExample": "Yüksek bina vadinin manzarasını bozuyor."
  },
  {
    "word": "Precipitate",
    "type": "verb",
    "turkish": "Hızlandırmak, tetiklemek, zemin hazırlamak",
    "example": "The crisis was precipitated by a sudden fall in oil prices.",
    "turkishExample": "Kriz, petrol fiyatlarındaki ani düşüşle tetiklendi."
  },
  {
    "word": "Quotation",
    "type": "noun",
    "turkish": "Alıntı, aktarma, fiyat teklifi",
    "example": "The book begins with a quotation from Shakespeare.",
    "turkishExample": "Kitap Shakespeare'den bir alıntı ile başlıyor."
  },
  {
    "word": "Realm",
    "type": "noun",
    "turkish": "Alan, saha, krallık",
    "example": "New discoveries are being made in the realm of science.",
    "turkishExample": "Bilim alanında yeni keşifler yapılıyor."
  },
  {
    "word": "Migration",
    "type": "noun",
    "turkish": "Göç, hicret",
    "example": "The seasonal migration of birds is a fascinating phenomenon.",
    "turkishExample": "Kuşların mevsimsel göçü büyüleyici bir fenomendir."
  },
  {
    "word": "Nullify",
    "type": "verb",
    "turkish": "Geçersiz kılmak, iptal etmek, etkisiz bırakmak",
    "example": "The judge nullified the contract due to the error.",
    "turkishExample": "Hâkim, hata nedeniyle sözleşmeyi geçersiz kıldı.",
    "suffix": "ify"
  },
  {
    "word": "Obesity",
    "type": "noun",
    "turkish": "Obezite, aşırı şişmanlık",
    "example": "Obesity is a major health problem in developed countries.",
    "turkishExample": "Obezite, gelişmiş ülkelerde büyük bir sağlık sorunudur.",
    "suffix": "ity"
  },
  {
    "word": "Poison",
    "type": "noun",
    "turkish": "Zehir, ağı",
    "example": "Handle the pesticide with care; it is a deadly poison.",
    "turkishExample": "Pestisiti dikkatli kullanın; ölümcül bir zehirdir."
  },
  {
    "word": "Specify",
    "type": "verb",
    "turkish": "Belirlemek, açıkça ifade etmek",
    "example": "The regulations specify that all participants must wear helmets.",
    "turkishExample": "Yönetmelikler tüm katılımcıların kask takması gerektiğini belirtmektedir.",
    "suffix": "ify"
  },
  {
    "word": "Supplant",
    "type": "verb",
    "turkish": "Yerini almak, yerine geçmek",
    "example": "New technologies often supplant older ones very quickly.",
    "turkishExample": "Yeni teknolojiler genellikle eskilerin yerini hızla alır."
  },
  {
    "word": "Dilate",
    "type": "verb",
    "turkish": "Genişlemek, büyümek (göz bebeği vb.)",
    "example": "The doctor used drops to dilate the patient's pupils.",
    "turkishExample": "Doktor hastanın göz bebeklerini genişletmek için damla kullandı.",
    "suffix": "ate"
  },
  {
    "word": "Deal",
    "type": "noun",
    "turkish": "Anlaşma, uzlaşma, miktar",
    "example": "The two companies signed a business deal yesterday.",
    "turkishExample": "İki şirket dün bir iş anlaşması imzaladı."
  },
  {
    "word": "Decade",
    "type": "noun",
    "turkish": "On yıl",
    "example": "The economy has improved significantly over the last decade.",
    "turkishExample": "Ekonomi son on yılda önemli ölçüde gelişti."
  },
  {
    "word": "Contempt",
    "type": "noun",
    "turkish": "Küçümseme, aşağılama, hakaret",
    "example": "He showed utter contempt for the law.",
    "turkishExample": "Yasaya karşı tam bir küçümseme gösterdi."
  },
  {
    "word": "Adjourn",
    "type": "verb",
    "turkish": "Ara vermek, ertelemek, oturumu kapatmak",
    "example": "The meeting was adjourned until next Tuesday.",
    "turkishExample": "Toplantı gelecek Salı gününe kadar ertelendi."
  },
  {
    "word": "Assign",
    "type": "verb",
    "turkish": "Atamak, görevlendirmek, tahsis etmek",
    "example": "The teacher assigned a difficult task to the students.",
    "turkishExample": "Öğretmen öğrencilere zor bir görev atadı."
  },
  {
    "word": "Track",
    "type": "verb",
    "turkish": "İzlemek, takip etmek",
    "example": "Detectives used security cameras to track the suspect.",
    "turkishExample": "Dedektifler şüpheliyi takip etmek için güvenlik kameralarını kullandı."
  },
  {
    "word": "Treasure",
    "type": "verb",
    "turkish": "Değer vermek, hazine gibi saklamak",
    "example": "I will always treasure the memories of our trip.",
    "turkishExample": "Gezimizin hatıralarını her zaman değerli bir hazine gibi saklayacağım."
  },
  {
    "word": "Threat",
    "type": "noun",
    "turkish": "Tehdit, korkutma",
    "example": "Climate change poses a serious threat to the planet.",
    "turkishExample": "İklim değişikliği gezegen için ciddi bir tehdit oluşturuyor."
  },
  {
    "word": "Attach",
    "type": "verb",
    "turkish": "Bağlamak, iliştirmek, eklemek",
    "example": "Please attach a recent photograph to your application.",
    "turkishExample": "Lütfen başvurunuza yakın zamanda çekilmiş bir fotoğraf ekleyin."
  },
  {
    "word": "Attitude",
    "type": "noun",
    "turkish": "Tavır, tutum, yaklaşım",
    "example": "A positive attitude is essential for success.",
    "turkishExample": "Başarı için olumlu bir tutum esastır."
  },
  {
    "word": "Apathy",
    "type": "noun",
    "turkish": "Kayıtsızlık, ilgisizlik, duygusuzluk",
    "example": "There is growing public apathy towards politics.",
    "turkishExample": "Siyasete karşı büyüyen bir halk ilgisizliği var."
  },
  {
    "word": "Annihilation",
    "type": "noun",
    "turkish": "Yok etme, imha etme",
    "example": "The threat of nuclear annihilation hung over the world during the Cold War.",
    "turkishExample": "Soğuk Savaş sırasında nükleer yok olma tehdidi dünyanın üzerinde asılı kaldı.",
    "suffix": "tion"
  },
  {
    "word": "Consolidate",
    "type": "verb",
    "turkish": "Pekiştirmek, güçlendirmek, birleştirmek",
    "example": "The company hopes to consolidate its position in the market.",
    "turkishExample": "Şirket pazardaki konumunu sağlamlaştırmayı umuyor.",
    "suffix": "ate"
  },
  {
    "word": "Coerce",
    "type": "verb",
    "turkish": "Zorlamak, baskı yapmak",
    "example": "Witnesses were coerced into giving false testimony.",
    "turkishExample": "Tanıklar yalan ifade vermeye zorlandı."
  },
  {
    "word": "Defect",
    "type": "noun",
    "turkish": "Kusur, hata, eksiklik",
    "example": "The car was recalled due to a serious safety defect.",
    "turkishExample": "Araba, ciddi bir güvenlik kusuru nedeniyle geri çağrıldı."
  },
  {
    "word": "Despise",
    "type": "verb",
    "turkish": "Aşağılamak, hor görmek, tiksinmek",
    "example": "She despised anyone who was cruel to animals.",
    "turkishExample": "Hayvanlara eziyet eden herkesten nefret ederdi."
  },
  {
    "word": "Expend",
    "type": "verb",
    "turkish": "Harcamak, tüketmek",
    "example": "Government should not expend resources on projects with no benefit.",
    "turkishExample": "Hükümet faydası olmayan projelere kaynak harcamamalıdır."
  },
  {
    "word": "Entitle",
    "type": "verb",
    "turkish": "Hak kazanmak, yetki vermek, isimlendirmek",
    "example": "This ticket entitles you to a free meal.",
    "turkishExample": "Bu bilet size ücretsiz bir yemek hakkı verir."
  },
  {
    "word": "Illustrate",
    "type": "verb",
    "turkish": "Örneklemek, resimlemek, açıklamak",
    "example": "He used a simple diagram to illustrate his point.",
    "turkishExample": "Söylemek istediğini açıklamak için basit bir diyagram kullandı.",
    "suffix": "ate"
  },
  {
    "word": "Influx",
    "type": "noun",
    "turkish": "Akın, istila, giriş",
    "example": "The city is struggling to cope with the influx of tourists.",
    "turkishExample": "Şehir, turist akınıyla başa çıkmakta zorlanıyor."
  },
  {
    "word": "Grumble",
    "type": "verb",
    "turkish": "Söylenmek, homurdanmak, şikayet etmek",
    "example": "They总是 grumble about the quality of the food.",
    "turkishExample": "Yemeğin kalitesi hakkında her zaman söylenirler."
  },
  {
    "word": "Obligation",
    "type": "noun",
    "turkish": "Yükümlülük, zorunluluk",
    "example": "We have a moral obligation to help those in need.",
    "turkishExample": "İhtiyacı olanlara yardım etmek için ahlaki bir yükümlülüğümüz var.",
    "suffix": "tion"
  },
  {
    "word": "Momentum",
    "type": "noun",
    "turkish": "Hız, ivme, güç",
    "example": "The campaign is gaining momentum as the election approaches.",
    "turkishExample": "Seçim yaklaştıkça kampanya ivme kazanıyor."
  },
  {
    "word": "Menace",
    "type": "verb",
    "turkish": "Tehdit etmek, korkutmak",
    "example": "The hijacked plane menaced several cities.",
    "turkishExample": "Kaçırılan uçak birkaç şehri tehdit etti."
  },
  {
    "word": "Negotiate",
    "type": "verb",
    "turkish": "Müzakere etmek, görüşmek",
    "example": "The government refused to negotiate with the terrorists.",
    "turkishExample": "Hükümet teröristlerle müzakere etmeyi reddetti.",
    "suffix": "ate"
  },
  {
    "word": "Pose",
    "type": "verb",
    "turkish": "Oluşturmak (tehlike vb.), poz vermek",
    "example": "The high levels of pollution pose a threat to health.",
    "turkishExample": "Yüksek kirlilik seviyeleri sağlık için tehdit oluşturuyor."
  },
  {
    "word": "Exaggerate",
    "type": "verb",
    "turkish": "Abartmak, mübalağa etmek",
    "example": "Don't exaggerate the difficulties; it's not that hard.",
    "turkishExample": "Zorlukları abartma; o kadar da zor değil.",
    "suffix": "ate"
  },
  {
    "word": "Exhaust",
    "type": "verb",
    "turkish": "Yormak, tüketmek, bitirmek",
    "example": "The long journey had exhausted the travelers.",
    "turkishExample": "Uzun yolculuk gezginleri yormuştu."
  },
  {
    "word": "Discriminate",
    "type": "verb",
    "turkish": "Ayırt etmek, ayrımcılık yapmak",
    "example": "It is illegal to discriminate on the basis of race or gender.",
    "turkishExample": "Irk veya cinsiyete dayalı ayrımcılık yapmak yasa dışıdır.",
    "suffix": "ate"
  },
  {
    "word": "Dismiss",
    "type": "verb",
    "turkish": "Kovmak, azletmek, reddetmek",
    "example": "The case was dismissed due to lack of evidence.",
    "turkishExample": "Dava, delil yetersizliği nedeniyle reddedildi."
  },
  {
    "word": "Custody",
    "type": "noun",
    "turkish": "Gözaltı, velayet, koruma",
    "example": "The suspect is currently in police custody.",
    "turkishExample": "Şüpheli şu anda polis gözetiminde."
  },
  {
    "word": "Commerce",
    "type": "noun",
    "turkish": "Ticaret, iş dünyası",
    "example": "The city has long been a major center of commerce.",
    "turkishExample": "Şehir uzun süredir önemli bir ticaret merkezi olmuştur."
  },
  {
    "word": "Ambition",
    "type": "noun",
    "turkish": "Hırs, tutku, ideal",
    "example": "His ambition is to become a world-famous surgeon.",
    "turkishExample": "Onun hırsı dünyaca ünlü bir cerrah olmaktır.",
    "suffix": "tion"
  },
  {
    "word": "Absorb",
    "type": "verb",
    "turkish": "Soğurmak, emmek, içine almak",
    "example": "Plants absorb nutrients and water through their roots.",
    "turkishExample": "Bitkiler besinleri ve suyu kökleri aracılığıyla emerler."
  },
  {
    "word": "Apprehension",
    "type": "noun",
    "turkish": "Endişe, korku, kavrama, tutuklama",
    "example": "He felt a sense of apprehension before the interview.",
    "turkishExample": "Mülakattan önce bir endişe hissetti.",
    "suffix": "sion"
  },
  {
    "word": "Assure",
    "type": "verb",
    "turkish": "Güvence vermek, temin etmek",
    "example": "I can assure you that everything will be okay.",
    "turkishExample": "Size her şeyin yolunda gideceğine dair güvence verebilirim."
  },
  {
    "word": "Shortage",
    "type": "noun",
    "turkish": "Kıtlık, eksiklik, noksanlık",
    "example": "There is a severe shortage of clean water in the region.",
    "turkishExample": "Bölgede ciddi bir temiz su kıtlığı var.",
    "suffix": "age"
  },
  {
    "word": "Tempt",
    "type": "verb",
    "turkish": "Cezbetmek, kışkırtmak, heveslendirmek",
    "example": "The delicious smell of the cake tempted him to eat a piece.",
    "turkishExample": "Pastanın nefis kokusu onu bir dilim yemeye cezbetti."
  },
  {
    "word": "Ascend",
    "type": "verb",
    "turkish": "Yükselmek, çıkmak, yukarı gitmek",
    "example": "The balloon began to ascend slowly into the sky.",
    "turkishExample": "Balon gökyüzüne doğru yavaşça yükselmeye başladı.",
    "suffix": "end"
  },
  {
    "word": "Assault",
    "type": "noun",
    "turkish": "Saldırı, tecavüz",
    "example": "He was charged with sexual assault.",
    "turkishExample": "Cinsel saldırı ile suçlandı."
  },
  {
    "word": "Discern",
    "type": "verb",
    "turkish": "Ayırt etmek, fark etmek, sezmek",
    "example": "It was difficult to discern the truth from his lies.",
    "turkishExample": "Onun yalanlarından gerçeği ayırt etmek zordu."
  },
  {
    "word": "Evacuate",
    "type": "verb",
    "turkish": "Tahliye etmek, boşaltmak",
    "example": "Police evacuated several streets after a suspicious package was found.",
    "turkishExample": "Şüpheli bir paket bulunduktan sonra polis birkaç sokağı tahliye etti.",
    "suffix": "ate"
  },
  {
    "word": "Implicate",
    "type": "verb",
    "turkish": "İlişkilendirmek, bulaştırmak, suçlamak",
    "example": "He tried to avoid saying anything that might implicate him in the crime.",
    "turkishExample": "Kendisini suça bulaştırabilecek herhangi bir şey söylemekten kaçınmaya çalıştı.",
    "suffix": "ate"
  },
  {
    "word": "Gauge",
    "type": "verb",
    "turkish": "Ölçmek, tahmin etmek, değerlendirmek",
    "example": "It is difficult to gauge the success of the project at this early stage.",
    "turkishExample": "Projenin başarısını bu erken aşamada değerlendirmek zordur."
  },
  {
    "word": "Surveillance",
    "type": "noun",
    "turkish": "Gözetleme, izleme, takip",
    "example": "The suspects were kept under constant surveillance.",
    "turkishExample": "Şüpheliler sürekli gözetim altında tutuldu.",
    "suffix": "ance"
  },
  {
    "word": "Pledge",
    "type": "noun",
    "turkish": "Söz, vaat, taahhüt",
    "example": "The government has made a pledge to reduce taxes.",
    "turkishExample": "Hükümet vergileri düşürme sözü verdi."
  },
  {
    "word": "Onslaught",
    "type": "noun",
    "turkish": "Şiddetli saldırı, hücum",
    "example": "The town survived the onslaught of the storm.",
    "turkishExample": "Kasaba fırtınanın şiddetli saldırısından kurtuldu."
  },
  {
    "word": "Render",
    "type": "verb",
    "turkish": "Hale getirmek, sunmak, etmek",
    "example": "The blow to his head rendered him unconscious.",
    "turkishExample": "Başına aldığı darbe onu bilincini kaybetmiş hale getirdi."
  },
  {
    "word": "Reputation",
    "type": "noun",
    "turkish": "İtibar, ün, ad",
    "example": "The company has a reputation for high-quality products.",
    "turkishExample": "Şirket, yüksek kaliteli ürünleriyle tanınan bir itibara sahiptir.",
    "suffix": "tion"
  },
  {
    "word": "Reconciliation",
    "type": "noun",
    "turkish": "Uzlaşma, barışma",
    "example": "The treaty marked the beginning of reconciliation between the two nations.",
    "turkishExample": "Antlaşma iki ulus arasındaki uzlaşmanın başlangıcı oldu.",
    "suffix": "tion"
  },
  {
    "word": "Prevail",
    "type": "verb",
    "turkish": "Yaygın olmak, galip gelmek, hüküm sürmek",
    "example": "Common sense must prevail in this situation.",
    "turkishExample": "Bu durumda sağduyu galip gelmelidir."
  },
  {
    "word": "Probe",
    "type": "noun",
    "turkish": "Soruşturma, inceleme, araştırma",
    "example": "A government probe into the causes of the disaster has begun.",
    "turkishExample": "Felaketin nedenlerine ilişkin bir hükümet soruşturması başladı."
  },
  {
    "word": "Forgery",
    "type": "noun",
    "turkish": "Sahtecilik, sahte belge",
    "example": "He was arrested for the forgery of several checks.",
    "turkishExample": "Birkaç çekte sahtecilik yaptığı için tutuklandı."
  },
  {
    "word": "Equip",
    "type": "verb",
    "turkish": "Donatmak, teçhiz etmek",
    "example": "The laboratory is equipped with the latest technology.",
    "turkishExample": "Laboratuvar en son teknolojiyle donatılmıştır."
  },
  {
    "word": "Dominate",
    "type": "verb",
    "turkish": "Egemen olmak, hükmetmek, baskın gelmek",
    "example": "The new skyscraper dominates the city skyline.",
    "turkishExample": "Yeni gökdelen şehrin siluetine hakim durumda.",
    "suffix": "ate"
  },
  {
    "word": "Comprehend",
    "type": "verb",
    "turkish": "Anlamak, kavramak, idrak etmek",
    "example": "She could not comprehend the extent of the damage.",
    "turkishExample": "Hasarın boyutunu kavrayamadı."
  },
  {
    "word": "Advocate",
    "type": "verb",
    "turkish": "Savunmak, desteklemek",
    "example": "They advocate for a more sustainable environmental policy.",
    "turkishExample": "Daha sürdürülebilir bir çevre politikasını savunuyorlar.",
    "suffix": "ate"
  },
  {
    "word": "Volatility",
    "type": "noun",
    "turkish": "Değişkenlik, istikrarsızlık",
    "example": "The stock market is experiencing a period of high volatility.",
    "turkishExample": "Borsa yüksek bir değişkenlik dönemi yaşıyor.",
    "suffix": "ity"
  },
  {
    "word": "Volunteer",
    "type": "verb",
    "turkish": "Gönüllü olmak",
    "example": "He volunteered to help with the charity event.",
    "turkishExample": "Hayır etkinliğine yardım etmek için gönüllü oldu."
  },
  {
    "word": "Solidarity",
    "type": "noun",
    "turkish": "Dayanışma, birlik",
    "example": "The workers showed solidarity during the strike.",
    "turkishExample": "İşçiler grev sırasında dayanışma gösterdiler.",
    "suffix": "ity"
  },
  {
    "word": "Adjust",
    "type": "verb",
    "turkish": "Ayarlamak, uymak, alışmak",
    "example": "It took him some time to adjust to his new job.",
    "turkishExample": "Yeni işine alışması biraz zaman aldı."
  },
  {
    "word": "Contain",
    "type": "verb",
    "turkish": "İçermek, kapsamak, kontrol altına almak",
    "example": "This box contains old photographs and letters.",
    "turkishExample": "Bu kutu eski fotoğraflar ve mektuplar içeriyor."
  },
  {
    "word": "Curtail",
    "type": "verb",
    "turkish": "Kısıtlamak, azaltmak, kısa kesmek",
    "example": "The budget was curtailed due to the economic crisis.",
    "turkishExample": "Ekonomik kriz nedeniyle bütçe kısıtlandı."
  },
  {
    "word": "Dispute",
    "type": "verb",
    "turkish": "Tartışmak, itiraz etmek, çekişmek",
    "example": "They disputed the ownership of the land.",
    "turkishExample": "Arazinin mülkiyeti konusunda tartıştılar."
  },
  {
    "word": "Dismay",
    "type": "noun",
    "turkish": "Dehşet, korku, umutsuzluk",
    "example": "To my dismay, the plan was rejected.",
    "turkishExample": "Dehşetle gördüm ki plan reddedildi."
  },
  {
    "word": "Impede",
    "type": "verb",
    "turkish": "Engellemek, geciktirmek, ayak bağı olmak",
    "example": "Heavy snow impeded the rescue efforts.",
    "turkishExample": "Yoğun kar kurtarma çalışmalarını engelledi."
  },
  {
    "word": "Inhibit",
    "type": "verb",
    "turkish": "Engellemek, dizginlemek, yasaklamak",
    "example": "Fear of failure can inhibit creativity.",
    "turkishExample": "Başarısızlık korkusu yaratıcılığı engelleyebilir."
  },
  {
    "word": "Forecast",
    "type": "verb",
    "turkish": "Tahmin etmek, önceden kestirmek",
    "example": "Experts forecast that the economy will grow by 3% this year.",
    "turkishExample": "Uzmanlar ekonominin bu yıl %3 büyüyeceğini tahmin ediyor."
  },
  {
    "word": "Foresee",
    "type": "verb",
    "turkish": "Öngörmek, önceden görmek",
    "example": "We could not foresee the problems that would arise.",
    "turkishExample": "Ortaya çıkacak sorunları öngöremedik."
  },
  {
    "word": "Justify",
    "type": "verb",
    "turkish": "Haklı çıkarmak, gerekçelendirmek",
    "example": "He tried to justify his absence from the meeting.",
    "turkishExample": "Toplantıya katılmamasını haklı çıkarmaya çalıştı.",
    "suffix": "ify"
  },
  {
    "word": "Cons",
    "type": "noun",
    "turkish": "Dezavantajlar, eksiler",
    "example": "You should weigh the pros and cons before making a decision.",
    "turkishExample": "Karar vermeden önce artıları ve eksileri tartmalısınız."
  },
  {
    "word": "Manifest",
    "type": "verb",
    "turkish": "Göstermek, belli etmek, ortaya koymak",
    "example": "The disease manifests itself as a high fever and a cough.",
    "turkishExample": "Hastalık kendini yüksek ateş ve öksürükle gösterir."
  },
  {
    "word": "Massacre",
    "type": "noun",
    "turkish": "Katliam, kıyım",
    "example": "Many innocent people were killed in the massacre.",
    "turkishExample": "Katliamda pek çok masum insan öldürüldü."
  },
  {
    "word": "Mend",
    "type": "verb",
    "turkish": "Tamir etmek, onarmak, iyileşmek",
    "example": "He mended the broken fence.",
    "turkishExample": "Kırık çiti tamir etti."
  },
  {
    "word": "Modify",
    "type": "verb",
    "turkish": "Değiştirmek, modifiye etmek, hafifletmek",
    "example": "They had to modify the original plan slightly.",
    "turkishExample": "Orijinal planı biraz değiştirmek zorunda kaldılar.",
    "suffix": "ify"
  },
  {
    "word": "Mitigate",
    "type": "verb",
    "turkish": "Hafifletmek, yatıştırmak, azaltmak",
    "example": "We need to take actions to mitigate the effects of climate change.",
    "turkishExample": "İklim değişikliğinin etkilerini hafifletmek için harekete geçmemiz gerekiyor.",
    "suffix": "ate"
  },
  {
    "word": "Impact",
    "type": "noun",
    "turkish": "Etki, çarpma, darbe",
    "example": "The new law will have a significant impact on small businesses.",
    "turkishExample": "Yeni yasanın küçük işletmeler üzerinde önemli bir etkisi olacak."
  },
  {
    "word": "Diffuse",
    "type": "verb",
    "turkish": "Yaymak, dağıtmak, yayılmak",
    "example": "The heat gradually diffused throughout the building.",
    "turkishExample": "Isı yavaş yavaş binanın her yerine yayıldı."
  },
  {
    "word": "Dwarf",
    "type": "noun",
    "turkish": "Cüce",
    "example": "In many fairy tales, dwarves are skilled miners.",
    "turkishExample": "Pek çok masalında cüceler yetenekli madencilerdir."
  },
  {
    "word": "Entrepreneur",
    "type": "noun",
    "turkish": "Girişimci",
    "example": "She is a successful entrepreneur who started her own tech company.",
    "turkishExample": "Kendi teknoloji şirketini kuran başarılı bir girişimcidir."
  },
  {
    "word": "Convert",
    "type": "verb",
    "turkish": "Dönüştürmek, çevirmek",
    "example": "They converted the old barn into a modern house.",
    "turkishExample": "Eski ahırı modern bir eve dönüştürdüler."
  },
  {
    "word": "Accuse",
    "type": "verb",
    "turkish": "Suçlamak, itham etmek",
    "example": "He was accused of stealing the company's secrets.",
    "turkishExample": "Şirket sırlarını çalmakla suçlandı."
  },
  {
    "word": "Beat",
    "type": "verb",
    "turkish": "Vurmak, dövmek, yenmek",
    "example": "Our team beat theirs by three goals to one.",
    "turkishExample": "Takımımız onlarınkini üçe bir yendi."
  },
  {
    "word": "Case",
    "type": "noun",
    "turkish": "Durum, vaka, dava",
    "example": "The police are investigation several cases of fraud.",
    "turkishExample": "Polis birkaç dolandırıcılık vakasını araştırıyor."
  },
  {
    "word": "Ban",
    "type": "verb",
    "turkish": "Yasaklamak, men etmek",
    "example": "The government decided to ban smoking in all public places.",
    "turkishExample": "Hükümet tüm halka açık yerlerde sigara içmeyi yasaklamaya karar verdi."
  },
  {
    "word": "Pursue",
    "type": "verb",
    "turkish": "Takip etmek, sürdürmek, peşinden koşmak",
    "example": "She decided to pursue a career in medicine.",
    "turkishExample": "Tıp alanında bir kariyer peşinde koşmaya karar verdi."
  },
  {
    "word": "Convene",
    "type": "verb",
    "turkish": "Toplanmak, toplantıya çağırmak",
    "example": "The committee will convene next week to discuss the proposal.",
    "turkishExample": "Komite, öneriyi görüşmek üzere önümüzdeki hafta toplanacak."
  },
  {
    "word": "Dissolve",
    "type": "verb",
    "turkish": "Çözmek, eritmek, feshetmek",
    "example": "Sugar dissolves quickly in hot water.",
    "turkishExample": "Şeker sıcak suda çabuk çözünür."
  },
  {
    "word": "Hurricane",
    "type": "noun",
    "turkish": "Kasırga, fırtına",
    "example": "The hurricane caused widespread destruction along the coast.",
    "turkishExample": "Kasırga kıyı boyunca yaygın yıkıma neden oldu."
  },
  {
    "word": "Hinder",
    "type": "verb",
    "turkish": "Engellemek, aksatmak, mani olmak",
    "example": "A lack of funds is hindering the development of the project.",
    "turkishExample": "Fon eksikliği projenin gelişimini engelliyor."
  },
  {
    "word": "Instinct",
    "type": "noun",
    "turkish": "İçgüdü",
    "example": "Birds build nests by instinct.",
    "turkishExample": "Kuşlar içgüdüleriyle yuva yaparlar."
  },
  {
    "word": "Guilt",
    "type": "noun",
    "turkish": "Suçluluk, kabahat",
    "example": "He was overwhelmed by a sense of guilt.",
    "turkishExample": "Bir suçluluk duygusuyla boğulmuştu."
  },
  {
    "word": "Quantity",
    "type": "noun",
    "turkish": "Miktar, nicelik",
    "example": "The company produces a large quantity of electronic goods.",
    "turkishExample": "Şirket büyük miktarda elektronik eşya üretiyor.",
    "suffix": "ity"
  },
  {
    "word": "Paradise",
    "type": "noun",
    "turkish": "Cennet",
    "example": "The island is a tropical paradise.",
    "turkishExample": "Ada, tropikal bir cennet."
  },
  {
    "word": "Repeal",
    "type": "verb",
    "turkish": "Feshetmek, iptal etmek, yürürlükten kaldırmak (yasa)",
    "example": "The government decided to repeal the unpopular tax.",
    "turkishExample": "Hükümet, halk tarafından sevilmeyen vergiyi yürürlükten kaldırmaya karar verdi."
  },
  {
    "word": "Litter",
    "type": "noun",
    "turkish": "Çöp (yere atılan), döküntü",
    "example": "Please do not drop litter in the park.",
    "turkishExample": "Lütfen parka çöp atmayın."
  },
  {
    "word": "Recruit",
    "type": "verb",
    "turkish": "İşe almak, (asker) toplamak, bünyesine katmak",
    "example": "The company is looking to recruit new employees.",
    "turkishExample": "Şirket yeni çalışanlar almayı bekliyor."
  },
  {
    "word": "Nuisance",
    "type": "noun",
    "turkish": "Dert, baş belası, rahatsızlık veren şey",
    "example": "The loud noise from the construction site is a real nuisance.",
    "turkishExample": "Şantiyeden gelen yüksek gürültü tam bir baş belası.",
    "suffix": "ance"
  },
  {
    "word": "Nurture",
    "type": "verb",
    "turkish": "Beslemek, bakmak, geliştirmek, eğitmek",
    "example": "She carefully nurtured the young plants in her garden.",
    "turkishExample": "Bahçesindeki genç bitkileri özenle besleyip büyüttü."
  },
  {
    "word": "Split",
    "type": "verb",
    "turkish": "Bölmek, ayrılmak, yarmak",
    "example": "The wooden board split in two under the heavy weight.",
    "turkishExample": "Ahşap tahta ağır yük altında ikiye ayrıldı."
  },
  {
    "word": "Disdain",
    "type": "noun",
    "turkish": "Küstahlık, küçümseme, hor görme",
    "example": "He treated his rivals with utter disdain.",
    "turkishExample": "Rakiplerine tam bir küçümsemeyle davrandı."
  },
  {
    "word": "Establish",
    "type": "verb",
    "turkish": "Kurmak, tesis etmek, saptamak",
    "example": "The company was established in 1950.",
    "turkishExample": "Şirket 1950 yılında kuruldu."
  },
  {
    "word": "Exploit",
    "type": "verb",
    "turkish": "Sömürmek, faydalanmak, kendi çıkarına kullanmak",
    "example": "Some companies exploit their workers by paying low wages.",
    "turkishExample": "Bazı şirketler düşük ücret ödeyerek işçilerini sömürüyor."
  },
  {
    "word": "Extend",
    "type": "verb",
    "turkish": "Uzatmak, genişletmek, sürmek",
    "example": "They decided to extend their holiday by another week.",
    "turkishExample": "Tatillerini bir hafta daha uzatmaya karar verdiler."
  },
  {
    "word": "Craft",
    "type": "noun",
    "turkish": "Zanaat, beceri, sanat",
    "example": "He spent years perfecting his craft as a woodcarver.",
    "turkishExample": "Yıllarını bir ahşap oymacısı olarak zanaatını mükemmelleştirmeye adadı."
  },
  {
    "word": "Delusion",
    "type": "noun",
    "turkish": "Delüzyon, yanılgı, kuruntu",
    "example": "He is under the delusion that he is a great actor.",
    "turkishExample": "Harika bir oyuncu olduğu yanılgısı içinde."
  },
  {
    "word": "Altitude",
    "type": "noun",
    "turkish": "Yükseklik, rakım",
    "example": "The plane was flying at an altitude of 30,000 feet.",
    "turkishExample": "Uçak 30.000 fit yükseklikte uçuyordu."
  },
  {
    "word": "Ability",
    "type": "noun",
    "turkish": "Yetenek, kabiliyet, beceri",
    "example": "She has the ability to speak four different languages.",
    "turkishExample": "Dört farklı dil konuşma yeteneğine sahip."
  },
  {
    "word": "Shipment",
    "type": "noun",
    "turkish": "Sevkiyat, gönderi",
    "example": "The shipment of new computers is expected to arrive tomorrow.",
    "turkishExample": "Yeni bilgisayar sevkiyatının yarın varması bekleniyor.",
    "suffix": "ment"
  },
  {
    "word": "Withhold",
    "type": "verb",
    "turkish": "Vermemek, esirgemek, saklamak, (bilgi vb.) gizlemek",
    "example": "The police decided to withhold the identity of the victim.",
    "turkishExample": "Polis kurbanın kimliğini gizli tutmaya karar verdi."
  },
  {
    "word": "Withstand",
    "type": "verb",
    "turkish": "Dayanmak, karşı koymak, direnmek",
    "example": "The building was designed to withstand strong earthquakes.",
    "turkishExample": "Bina güçlü depremlere dayanacak şekilde tasarlandı."
  },
  {
    "word": "Rival",
    "type": "noun",
    "turkish": "Rakip, hısım",
    "example": "The two companies are fierce rivals in the smartphone market.",
    "turkishExample": "İki şirket akıllı telefon pazarında azılı rakiplerdir."
  },
  {
    "word": "Zest",
    "type": "noun",
    "turkish": "Şevk, heyecan, neşe, lezzet",
    "example": "She has a real zest for life.",
    "turkishExample": "Yaşama karşı gerçek bir şevki var."
  },
  {
    "word": "Verify",
    "type": "verb",
    "turkish": "Doğrulamak, kanıtlamak, onaylamak",
    "example": "Please verify your email address before continuing.",
    "turkishExample": "Devam etmeden önce lütfen e-posta adresinizi doğrulayın.",
    "suffix": "ify"
  },
  {
    "word": "Vermin",
    "type": "noun",
    "turkish": "Haşere, zararlı hayvanlar",
    "example": "The farm was infested with vermin like rats and mice.",
    "turkishExample": "Çiftlik sıçan ve fare gibi haşerelerle doluydu."
  },
  {
    "word": "Vacuum",
    "type": "noun",
    "turkish": "Vakum, boşluk",
    "example": "Light travels through a vacuum at a constant speed.",
    "turkishExample": "Işık vakumda sabit bir hızla ilerler."
  },
  {
    "word": "Acquire",
    "type": "verb",
    "turkish": "Edinmek, kazanmak, elde etmek",
    "example": "He managed to acquire a rare collection of stamps.",
    "turkishExample": "Ender bir pul koleksiyonu edinmeyi başardı."
  },
  {
    "word": "Adopt",
    "type": "verb",
    "turkish": "Evlat edinmek, benimsemek, seçmek",
    "example": "They decided to adopt a child from a local orphanage.",
    "turkishExample": "Yerel bir yetimhaneden bir çocuk evlat edinmeye karar verdiler."
  },
  {
    "word": "Excavate",
    "type": "verb",
    "turkish": "Kazmak, kazı yapmak",
    "example": "Archaeologists are excavating an ancient city in Egypt.",
    "turkishExample": "Arkeologlar Mısır'da antik bir şehri kazıyorlar.",
    "suffix": "ate"
  },
  {
    "word": "Enlighten",
    "type": "verb",
    "turkish": "Aydınlatmak, bilgi vermek",
    "example": "Could you enlighten me on the details of the contract?",
    "turkishExample": "Beni sözleşmenin detayları konusunda aydınlatabilir misiniz?"
  },
  {
    "word": "Diverge",
    "type": "verb",
    "turkish": "Aproksimasyon, ayrılmak, sapmak",
    "example": "The two paths diverge in the middle of the forest.",
    "turkishExample": "İki ince yol ormanın ortasında birbirinden ayrılıyor."
  },
  {
    "word": "Perplex",
    "type": "verb",
    "turkish": "Şaşırtmak, kafasını karıştırmak",
    "example": "The complicated instructions perplexed the students.",
    "turkishExample": "Karmaşık talimatlar öğrencilerin kafasını karıştırdı."
  },
  {
    "word": "Renown",
    "type": "noun",
    "turkish": "Ün, şöhret, nam",
    "example": "He achieved great renown for his work in theoretical physics.",
    "turkishExample": "Teorik fizik alanındaki çalışmalarıyla büyük bir ün kazandı."
  },
  {
    "word": "Quality",
    "type": "noun",
    "turkish": "Kalite, nitelik, özellik",
    "example": "We focus on providing services of the highest quality.",
    "turkishExample": "En yüksek kalitede hizmet sunmaya odaklanıyoruz.",
    "suffix": "ity"
  },
  {
    "word": "Glitter",
    "type": "verb",
    "turkish": "Işıldamak, parlamak",
    "example": "The diamonds glittered under the stage lights.",
    "turkishExample": "Elmaslar sahne ışıkları altında ışıldıyordu."
  },
  {
    "word": "Encounter",
    "type": "verb",
    "turkish": "Karşılaşmak, rastlamak",
    "example": "We encountered several difficulties during the project.",
    "turkishExample": "Proje sırasında birkaç zorlukla karşılaştık."
  },
  {
    "word": "Evaporate",
    "type": "verb",
    "turkish": "Buharlaşmak, yok olmak",
    "example": "The water in the puddle evaporated quickly in the sun.",
    "turkishExample": "Su birikintisindeki su güneşte hızla buharlaştı.",
    "suffix": "ate"
  },
  {
    "word": "Evoke",
    "type": "verb",
    "turkish": "Uyandırmak, anımsatmak, çağırmak",
    "example": "The old photographs evoked memories of his childhood.",
    "turkishExample": "Eski fotoğraflar çocukluk anılarını canlandırdı."
  },
  {
    "word": "Fallacy",
    "type": "noun",
    "turkish": "Yanılgı, hurafe, safsata",
    "example": "It is a common fallacy that only rich people are happy.",
    "turkishExample": "Sadece zengin insanların mutlu olduğu yaygın bir yanılgıdır."
  },
  {
    "word": "Concede",
    "type": "verb",
    "turkish": "Kabul etmek, teslim etmek, ödün vermek",
    "example": "He had to concede that he was wrong.",
    "turkishExample": "Hatalı olduğunu kabul etmek zorunda kaldı."
  },
  {
    "word": "Curb",
    "type": "verb",
    "turkish": "Zapt etmek, dizginlemek, kısıtlamak",
    "example": "The government is trying to curb public spending.",
    "turkishExample": "Hükümet kamu harcamalarını kısıtlamaya çalışıyor."
  },
  {
    "word": "Allocate",
    "type": "verb",
    "turkish": "Tahsis etmek, ayırmak, paylaştırmak",
    "example": "The council has allocated funds for the new sports center.",
    "turkishExample": "Belediye yeni spor merkezi için fon tahsis etti.",
    "suffix": "ate"
  },
  {
    "word": "Bustle",
    "type": "noun",
    "turkish": "Telaş, hareketlilik, gürültü patırtı",
    "example": "She loved the hustle and bustle of city life.",
    "turkishExample": "Şehir hayatının keşmekeşini ve hareketliliğini seviyordu."
  },
  {
    "word": "Asset",
    "type": "noun",
    "turkish": "Varlık, kazanç, değerli nitelik",
    "example": "Good health is a great asset.",
    "turkishExample": "İyi sağlık büyük bir varlıktır."
  },
  {
    "word": "Anticipate",
    "type": "verb",
    "turkish": "Beklemek, ummak, öngörmek",
    "example": "We anticipate that sales will rise next year.",
    "turkishExample": "Gelecek yıl satışların artacağını öngörüyoruz.",
    "suffix": "ate"
  },
  {
    "word": "Ailment",
    "type": "noun",
    "turkish": "Hastalık, rahatsızlık",
    "example": "She is suffering from a minor stomach ailment.",
    "turkishExample": "Hafif bir mide rahatsızlığı çekiyor.",
    "suffix": "ment"
  },
  {
    "word": "Accompany",
    "type": "verb",
    "turkish": "Eşlik etmek, beraberinde gitmek",
    "example": "War is often accompanied by famine and disease.",
    "turkishExample": "Savaşa sık sık kıtlık ve hastalık eşlik eder.",
    "suffix": "any"
  },
  {
    "word": "Abduct",
    "type": "verb",
    "turkish": "Adam kaçırmak, zorla götürmek",
    "example": "The child was abducted from outside his school.",
    "turkishExample": "Abduct kelimesini içeren örnek cümle..."
  },
  {
    "word": "Shift",
    "type": "verb",
    "turkish": "Değiştirmek, vites değiştirmek, kımıldatmak",
    "example": "The focus of the debate shifted to economic issues.",
    "turkishExample": "Tartışmanın odağı ekonomik meselelere kaydı."
  },
  {
    "word": "Course",
    "type": "noun",
    "turkish": "Kurs, seyir, izlenen yol, rota",
    "example": "The plane changed its course to avoid the storm.",
    "turkishExample": "Uçak fırtınadan kaçınmak için rotasını değiştirdi."
  },
  {
    "word": "Depart",
    "type": "verb",
    "turkish": "Ayrılmak, yola çıkmak, vefat etmek",
    "example": "The train is scheduled to depart at 10 AM.",
    "turkishExample": "Trenin sabah saat 10'da kalkması planlanıyor."
  },
  {
    "word": "Constrain",
    "type": "verb",
    "turkish": "Zorlamak, kısıtlamak, tutmak",
    "example": "His choices were constrained by his lack of money.",
    "turkishExample": "Seçimleri para eksikliği nedeniyle kısıtlıydı."
  },
  {
    "word": "Deviate",
    "type": "verb",
    "turkish": "Sapmak, ayrılmak, rotadan çıkmak",
    "example": "Do not deviate from the plan we agreed on.",
    "turkishExample": "Anlaştığımız plandan sapmayın.",
    "suffix": "ate"
  },
  {
    "word": "Drought",
    "type": "noun",
    "turkish": "Kuraklık",
    "example": "The crops failed because of the prolonged drought.",
    "turkishExample": "Uzun süren kuraklık nedeniyle ürünler yetişmedi."
  },
  {
    "word": "Fulfill",
    "type": "verb",
    "turkish": "Yerine getirmek, tamamlamak, gerçekleştirmek",
    "example": "He managed to fulfill his lifelong dream of traveling to Japan.",
    "turkishExample": "Hayat boyu süren Japonya'ya seyahat etme hayalini gerçekleştirmeyi başardı."
  },
  {
    "word": "Harass",
    "type": "verb",
    "turkish": "Taciz etmek, bezdirmek, rahatsız etmek",
    "example": "The employees were harassed by their boss.",
    "turkishExample": "Çalışanlar patronları tarafından taciz edildi."
  },
  {
    "word": "Peak",
    "type": "noun",
    "turkish": "Zirve, doruk, şahika",
    "example": "He reached the peak of his career at the age of 40.",
    "turkishExample": "Kariyerinin zirvesine 40 yaşında ulaştı."
  },
  {
    "word": "Outweigh",
    "type": "verb",
    "turkish": "Ağır basmak, -den daha önemli olmak",
    "example": "The benefits of the new project outweigh the costs.",
    "turkishExample": "Yeni projenin faydaları maliyetlerinden daha ağır basıyor."
  },
  {
    "word": "Raise",
    "type": "verb",
    "turkish": "Artırmak, yükseltmek, çocuk büyütmek, soru sormak",
    "example": "The government decided to raise the minimum wage.",
    "turkishExample": "Hükümet asgari ücreti artırmaya karar verdi."
  },
  {
    "word": "Gratify",
    "type": "verb",
    "turkish": "Memnun etmek, sevindirmek, tatmin etmek",
    "example": "It was gratifying to see that my hard work was appreciated.",
    "turkishExample": "Sıkı çalışmamın takdir edildiğini görmek sevindiriciydi.",
    "suffix": "ify"
  },
  {
    "word": "Insult",
    "type": "verb",
    "turkish": "Aşağılamak, hakaret etmek",
    "example": "He insulted her by calling her stupid.",
    "turkishExample": "Ona aptal diyerek hakaret etti."
  },
  {
    "word": "Cite",
    "type": "verb",
    "turkish": "Alıntı yapmak, bahsetmek, mahkemeye çağırmak",
    "example": "He cited several examples to support his argument.",
    "turkishExample": "Argümanını desteklemek için birkaç örnekten bahsetti."
  },
  {
    "word": "Defeat",
    "type": "verb",
    "turkish": "Yenmek, bozguna uğratmak",
    "example": "The army defeated the enemy after a long battle.",
    "turkishExample": "Ordu, uzun bir savaştan sonra düşmanı yendi."
  },
  {
    "word": "Decree",
    "type": "verb",
    "turkish": "Emretmek, kararlaştırmak, hükmetmek",
    "example": "The king decreed that all prisoners should be released.",
    "turkishExample": "Kral tüm mahkumların serbest bırakılmasını emretti."
  },
  {
    "word": "Convince",
    "type": "verb",
    "turkish": "İkna etmek, inandırmak",
    "example": "She tried to convince me that the plan would work.",
    "turkishExample": "Planın işe yarayacağına beni ikna etmeye çalıştı."
  },
  {
    "word": "Revoke",
    "type": "verb",
    "turkish": "Geri çekmek, iptal etmek, hükümsüz kılmak",
    "example": "His driving license was revoked after he was caught speeding.",
    "turkishExample": "Hız yaparken yakalandıktan sonra ehliyeti iptal edildi."
  },
  {
    "word": "Out",
    "type": "verb",
    "turkish": "Gerçekleri ortaya çıkarmak, dışarı çıkmak",
    "example": "The truth will eventually out.",
    "turkishExample": "Gerçek eninde sonunda ortaya çıkacaktır."
  },
  {
    "word": "Wisdom",
    "type": "noun",
    "turkish": "Bilgelik, akıl, hikmet",
    "example": "He is known for his great wisdom and experience.",
    "turkishExample": "Büyük bilgeliği ve deneyimiyle tanınır."
  },
  {
    "word": "Withdraw",
    "type": "verb",
    "turkish": "Geri çekilmek, (para) çekmek",
    "example": "The troops were ordered to withdraw from the border.",
    "turkishExample": "Birliklere sınırdan geri çekilmeleri emredildi."
  },
  {
    "word": "Prey",
    "type": "noun",
    "turkish": "Av, kurban",
    "example": "The lion stalked its prey through the tall grass.",
    "turkishExample": "Aslan, uzun otların arasında avını sinsice takip etti."
  },
  {
    "word": "Unrest",
    "type": "noun",
    "turkish": "Huzursuzluk, kargaşa, karışıklık",
    "example": "Economic problems led to widespread social unrest.",
    "turkishExample": "Ekonomik sorunlar yaygın toplumsal huzursuzluğa yol açtı."
  },
  {
    "word": "Verge",
    "type": "noun",
    "turkish": "Eşik, kenar, kıyı",
    "example": "The company was on the verge of bankruptcy.",
    "turkishExample": "Şirket iflasın eşiğindeydi."
  },
  {
    "word": "Trend",
    "type": "noun",
    "turkish": "Eğilim, akım, moda",
    "example": "There is a growing trend towards working from home.",
    "turkishExample": "Evden çalışmaya yönelik büyüyen bir eğilim var."
  },
  {
    "word": "Amass",
    "type": "verb",
    "turkish": "Biriktirmek, yığmak, toplamak",
    "example": "He amassed a fortune by investing in the stock market.",
    "turkishExample": "Borsaya yatırım yaparak bir servet biriktirdi."
  },
  {
    "word": "Bother",
    "type": "verb",
    "turkish": "Zahmet etmek, rahatsız etmek",
    "example": "Don't bother to call him; he's not at home.",
    "turkishExample": "Onu aramaya zahmet etme; evde değil."
  },
  {
    "word": "Thrive",
    "type": "verb",
    "turkish": "Gelişmek, serpilmek, başarılı olmak",
    "example": "The local business is thriving despite the economic downturn.",
    "turkishExample": "Yerel işletme, ekonomik durgunluğa rağmen gelişiyor."
  },
  {
    "word": "Contradict",
    "type": "verb",
    "turkish": "Çelişmek, aksini söylemek, yalanlamak",
    "example": "His actions contradict his words.",
    "turkishExample": "Eylemleri sözleriyle çelişiyor."
  },
  {
    "word": "Defer",
    "type": "verb",
    "turkish": "Ertelemek, sonraya bırakmak",
    "example": "They decided to defer the decision until next month.",
    "turkishExample": "Kararı gelecek aya kadar ertelemeye karar verdiler."
  },
  {
    "word": "Deceit",
    "type": "noun",
    "turkish": "Aldatma, hile, düzenbazlık",
    "example": "She was shocked by his deceit and lies.",
    "turkishExample": "Onun hilesi ve yalanları karşısında şok oldu."
  },
  {
    "word": "Delay",
    "type": "verb",
    "turkish": "Geciktirmek, ertelemek",
    "example": "The flight was delayed due to bad weather.",
    "turkishExample": "Uçuş kötü hava koşulları nedeniyle gecikti."
  },
  {
    "word": "Compulsion",
    "type": "noun",
    "turkish": "Zorlama, mecburiyet, içsel dürtü",
    "example": "He felt a compulsion to tell the truth.",
    "turkishExample": "Gerçeği söyleme konusunda bir içsel dürtü hissetti.",
    "suffix": "sion"
  },
  {
    "word": "Concession",
    "type": "noun",
    "turkish": "Taviz, ödün, imtiyaz",
    "example": "The government made several concessions to the protesters.",
    "turkishExample": "Hükümet protestoculara birkaç taviz verdi.",
    "suffix": "sion"
  },
  {
    "word": "Exterminate",
    "type": "verb",
    "turkish": "Yok etmek, kökünü kazımak, imha etmek",
    "example": "The pests were exterminated using chemical sprays.",
    "turkishExample": "Haşereler kimyasal spreyler kullanılarak yok edildi.",
    "suffix": "ate"
  },
  {
    "word": "Fatigue",
    "type": "noun",
    "turkish": "Yorgunluk, bitkinlik",
    "example": "He was suffering from physical and mental fatigue.",
    "turkishExample": "Fiziksel ve zihinsel yorgunluk çekiyordu."
  },
  {
    "word": "Fetch",
    "type": "verb",
    "turkish": "Gidip getirmek",
    "example": "Could you fetch me a glass of water, please?",
    "turkishExample": "Bana bir bardak su getirir misin lütfen?"
  },
  {
    "word": "Spill",
    "type": "verb",
    "turkish": "Dökmek, saçmak",
    "example": "I accidentally spilled coffee on my new shirt.",
    "turkishExample": "Yanlışlıkla yeni gömleğime kahve döktüm."
  },
  {
    "word": "Manufacture",
    "type": "verb",
    "turkish": "Üretmek, imal etmek",
    "example": "The factory manufactures car parts.",
    "turkishExample": "Fabrika araba parçaları üretiyor."
  },
  {
    "word": "Option",
    "type": "noun",
    "turkish": "Seçenek, opsiyon",
    "example": "We have several options for the weekend trip.",
    "turkishExample": "Hafta sonu gezisi için birkaç seçeneğimiz var.",
    "suffix": "tion"
  },
  {
    "word": "Nourish",
    "type": "verb",
    "turkish": "Beslemek, desteklemek",
    "example": "Children need healthy food to nourish their bodies.",
    "turkishExample": "Çocukların vücutlarını beslemek için sağlıklı yiyeceklere ihtiyacı vardır."
  },
  {
    "word": "Passion",
    "type": "noun",
    "turkish": "Tutku, hırs, aşk",
    "example": "Music has always been his greatest passion.",
    "turkishExample": "Müzik her zaman onun en büyük tutkusu olmuştur.",
    "suffix": "sion"
  },
  {
    "word": "Penetrate",
    "type": "verb",
    "turkish": "Nüfuz etmek, içine girmek, sızmak",
    "example": "The rain managed to penetrate his old jacket.",
    "turkishExample": "Yağmur onun eski ceketinin içine girmeyi başardı.",
    "suffix": "ate"
  },
  {
    "word": "Recurrence",
    "type": "noun",
    "turkish": "Tekerrür, yeniden ortaya çıkma",
    "example": "The doctor is worried about a recurrence of the disease.",
    "turkishExample": "Doktor hastalığın nüksetmesinden endişeleniyor.",
    "suffix": "ence"
  },
  {
    "word": "Succeed",
    "type": "verb",
    "turkish": "Başarmak, yerini almak, takip etmek",
    "example": "He succeeded in passing the exam with high marks.",
    "turkishExample": "Sınavı yüksek notlarla geçmeyi başardı."
  },
  {
    "word": "Inhabit",
    "type": "verb",
    "turkish": "Yaşamak, ikamet etmek",
    "example": "Several rare species of birds inhabit this island.",
    "turkishExample": "Bu adada birkaç nadir kuş türü yaşıyor."
  },
  {
    "word": "Detect",
    "type": "verb",
    "turkish": "Tespit etmek, belirlemek, sezmek",
    "example": "The sensor is designed to detect smoke and heat.",
    "turkishExample": "Sensör duman ve ısıyı tespit etmek için tasarlanmıştır."
  },
  {
    "word": "Upheaval",
    "type": "noun",
    "turkish": "Kargaşa, altüst oluş, büyük değişiklik",
    "example": "The civil war caused a major political upheaval.",
    "turkishExample": "İç savaş büyük bir siyasi kargaşaya neden oldu."
  },
  {
    "word": "Wrangle",
    "type": "verb",
    "turkish": "Tartışmak, ağız kavgası etmek",
    "example": "The politicians wrangled over the new budget for hours.",
    "turkishExample": "Politikacılar yeni bütçe üzerinde saatlerce tartıştılar."
  },
  {
    "word": "Witness",
    "type": "verb",
    "turkish": "Tanık olmak, görmek",
    "example": "Several people witnessed the accident.",
    "turkishExample": "Birkaç kişi kazaya tanık oldu."
  },
  {
    "word": "Yell",
    "type": "verb",
    "turkish": "Bağırmak, haykırmak",
    "example": "She yelled for help when she saw the fire.",
    "turkishExample": "Yangını görünce yardım için bağırdı."
  },
  {
    "word": "Sentiment",
    "type": "noun",
    "turkish": "Duygu, his, düşünce",
    "example": "Public sentiment is turning against the government.",
    "turkishExample": "Kamuoyu hükümetin aleyhine dönüyor.",
    "suffix": "ment"
  },
  {
    "word": "Sever",
    "type": "verb",
    "turkish": "Kesmek, ayırmak, bağını koparmak",
    "example": "The two countries decided to sever diplomatic relations.",
    "turkishExample": "İki ülke diplomatik ilişkileri kesmeye karar verdi."
  },
  {
    "word": "Accomplish",
    "type": "verb",
    "turkish": "Başarmak, tamamlamak, sonuçlandırmak",
    "example": "They accomplished more than they had hoped for.",
    "turkishExample": "Umut ettiklerinden daha fazlasını başardılar."
  },
  {
    "word": "Accede",
    "type": "verb",
    "turkish": "Kabul etmek, razı olmak, tahta çıkmak",
    "example": "The government finally acceded to the protesters' demands.",
    "turkishExample": "Hükümet nihayet protestocuların taleplerini kabul etti."
  },
  {
    "word": "Accelerate",
    "type": "verb",
    "turkish": "Hızlanmak, hızlandırmak",
    "example": "The car accelerated as it hit the open road.",
    "turkishExample": "Araba açık yola çıkınca hızlandı.",
    "suffix": "ate"
  },
  {
    "word": "Seize",
    "type": "verb",
    "turkish": "Ele geçirmek, yakalamak, el koymak",
    "example": "The police seized the illegal drugs at the border.",
    "turkishExample": "Polis sınırdaki yasa dışı uyuşturuculara el koydu."
  },
  {
    "word": "Reward",
    "type": "noun",
    "turkish": "Ödül, mükafat",
    "example": "Hard work often brings its own reward.",
    "turkishExample": "Sıkı çalışma genellikle kendi ödülünü getirir."
  },
  {
    "word": "Wield",
    "type": "verb",
    "turkish": "Kullanmak (güç, silah vb.), sahip olmak",
    "example": "The president wields enormous power within the party.",
    "turkishExample": "Başkan parti içinde muazzam bir güce sahip."
  },
  {
    "word": "Verdict",
    "type": "noun",
    "turkish": "Hüküm, karar, mahkeme kararı",
    "example": "The jury reached a unanimous verdict of guilty.",
    "turkishExample": "Jüri oybirliğiyle suçlu kararına vardı."
  },
  {
    "word": "Enterprise",
    "type": "noun",
    "turkish": "Girişim, işletme, atılım",
    "example": "The company is a successful commercial enterprise.",
    "turkishExample": "Şirket başarılı bir ticari girişimdir."
  },
  {
    "word": "Exceed",
    "type": "verb",
    "turkish": "Aşmak, geçmek, -den fazla olmak",
    "example": "The final cost of the project exceeded the budget.",
    "turkishExample": "Projenin nihai maliyeti bütçeyi aştı."
  },
  {
    "word": "Conflict",
    "type": "noun",
    "turkish": "Çatışma, anlaşmazlık, çelişki",
    "example": "There is a conflict of interest in this legal case.",
    "turkishExample": "Bu hukuk davasında bir çıkar çatışması var."
  },
  {
    "word": "Proponent",
    "type": "noun",
    "turkish": "Savunucu, taraftar, destekçi",
    "example": "He is a leading proponent of renewable energy.",
    "turkishExample": "Yenilenebilir enerjinin önde gelen savunucularından biridir."
  },
  {
    "word": "Surmount",
    "type": "verb",
    "turkish": "Aşmak, üstesinden gelmek, yenmek",
    "example": "They had to surmount many obstacles to reach the top.",
    "turkishExample": "Zirveye ulaşmak için birçok engeli aşmak zorunda kaldılar."
  },
  {
    "word": "Intuition",
    "type": "noun",
    "turkish": "Sezgi, önsezi",
    "example": "She had an intuition that something was wrong.",
    "turkishExample": "Bir şeylerin ters gittiğine dair bir sezgisi vardı.",
    "suffix": "tion"
  },
  {
    "word": "Intimacy",
    "type": "noun",
    "turkish": "Samimiyet, yakınlık, içtenlik",
    "example": "He feared losing the intimacy of their relationship.",
    "turkishExample": "İlişkilerindeki yakınlığı kaybetmekten korkuyordu.",
    "suffix": "acy"
  },
  {
    "word": "Retain",
    "type": "verb",
    "turkish": "Sürdürmek, korumak, elinde tutmak",
    "example": "The company managed to retain its market share.",
    "turkishExample": "Şirket pazar payını korumayı başardı."
  },
  {
    "word": "Lay",
    "type": "verb",
    "turkish": "Koymak, sermek, (yumurta) yumurtlamak",
    "example": "Please lay the book on the table.",
    "turkishExample": "Lütfen kitabı masanın üzerine koy."
  },
  {
    "word": "Consume",
    "type": "verb",
    "turkish": "Tüketmek, bitirmek",
    "example": "The fire consumed the entire forest.",
    "turkishExample": "Yangın tüm ormanı yok etti (tüketti)."
  },
  {
    "word": "Venture",
    "type": "verb",
    "turkish": "Tehlikeye atılmak, cüret etmek, girişimde bulunmak",
    "example": "They decided to venture into the unknown territory.",
    "turkishExample": "Bilinmeyen bölgeye gitmeye cüret ettiler."
  },
  {
    "word": "Versa",
    "type": "noun",
    "turkish": "Tersine (Vice versa olarak kullanılır)",
    "example": "He helps me and vice versa.",
    "turkishExample": "O bana yardım eder, ben de ona (ve tersi)."
  },
  {
    "word": "Cycle",
    "type": "noun",
    "turkish": "Döngü, bisiklet sürmek",
    "example": "The water cycle is a natural process.",
    "turkishExample": "Su döngüsü doğal bir süreçtir."
  },
  {
    "word": "Wage",
    "type": "noun",
    "turkish": "Ücret, maaş",
    "example": "They are demanding a higher wage for their work.",
    "turkishExample": "Çalışmaları için daha yüksek bir ücret talep ediyorlar."
  },
  {
    "word": "Off",
    "type": "verb",
    "turkish": "Kapatmak, bitirmek, gitmek",
    "example": "Please turn off the lights before you leave.",
    "turkishExample": "Lütfen çıkmadan önce ışıkları kapatın."
  },
  {
    "word": "Asylum",
    "type": "noun",
    "turkish": "Sığınma, barınak, akıl hastanesi",
    "example": "He applied for political asylum in the United Kingdom.",
    "turkishExample": "Birleşik Krallık'ta siyasi sığınma talebinde bulundu."
  },
  {
    "word": "Appraise",
    "type": "verb",
    "turkish": "Değer biçmek, değerlendirmek",
    "example": "The real estate agent came to appraise the house.",
    "turkishExample": "Emlakçı eve değer biçmek için geldi."
  },
  {
    "word": "Aggravate",
    "type": "verb",
    "turkish": "Kötüleştirmek, şiddetlendirmek, kızdırmak",
    "example": "Stress can aggravate certain medical conditions.",
    "turkishExample": "Stres bazı tıbbi durumları kötüleştirebilir.",
    "suffix": "ate"
  },
  {
    "word": "Affect",
    "type": "verb",
    "turkish": "Etkilemek, tesir etmek",
    "example": "The cold weather affected the plants in the garden.",
    "turkishExample": "Soğuk hava bahçedeki bitkileri etkiledi."
  },
  {
    "word": "Acclaim",
    "type": "verb",
    "turkish": "Övmek, alkışlamak, ilan etmek",
    "example": "The film was highly acclaimed by critics.",
    "turkishExample": "Film eleştirmenler tarafından büyük övgü aldı."
  },
  {
    "word": "Destiny",
    "type": "noun",
    "turkish": "Kader, nasip, alın yazısı",
    "example": "They believed it was their destiny to be together.",
    "turkishExample": "Birlikte olmanın kaderleri olduğuna inanıyorlardı."
  },
  {
    "word": "Consequence",
    "type": "noun",
    "turkish": "Sonuç, netice, önem",
    "example": "The decision had serious consequences for the company.",
    "turkishExample": "Kararın şirket için ciddi sonuçları oldu.",
    "suffix": "ence"
  },
  {
    "word": "Client",
    "type": "noun",
    "turkish": "Müşteri, müvekkil",
    "example": "The lawyer met with his client to discuss the case.",
    "turkishExample": "Avukat, davayı görüşmek üzere müvekkiliyle bir araya geldi."
  },
  {
    "word": "Dazzle",
    "type": "verb",
    "turkish": "Gözünü kamaştırmak, büyülemek",
    "example": "She was dazzled by the bright lights of the city.",
    "turkishExample": "Şehrin parlak ışıklarıyla gözleri kamaştı."
  },
  {
    "word": "Contrive",
    "type": "verb",
    "turkish": "Planlamak, kurmak, yolunu bulmak",
    "example": "They managed to contrive a way to escape from the prison.",
    "turkishExample": "Hapishaneden kaçmanın bir yolunu bulmayı başardılar."
  },
  {
    "word": "Foster",
    "type": "verb",
    "turkish": "Büyütmek, geliştirmek, teşvik etmek",
    "example": "The teacher tried to foster a sense of community in the classroom.",
    "turkishExample": "Öğretmen sınıfta bir topluluk duygusu geliştirmeye çalıştı."
  },
  {
    "word": "Fancy",
    "type": "verb",
    "turkish": "Hayal etmek, istemek, beğenmek",
    "example": "Do you fancy going out for a meal tonight?",
    "turkishExample": "Bu akşam yemeğe çıkmak ister misin?"
  },
  {
    "word": "Handle",
    "type": "verb",
    "turkish": "Ele almak, ilgilenmek, yönetmek",
    "example": "She knows how to handle difficult customers.",
    "turkishExample": "Zor müşterilerle nasıl ilgileneceğini biliyor."
  },
  {
    "word": "Infringe",
    "type": "verb",
    "turkish": "İhlal etmek, çiğnemek (kural vb.)",
    "example": "The new law could infringe on personal liberties.",
    "turkishExample": "Yeni yasa kişisel hürriyetleri ihlal edebilir."
  },
  {
    "word": "Interact",
    "type": "verb",
    "turkish": "Etkileşimde bulunmak, birbirini etkilemek",
    "example": "Children need to interact with other children from an early age.",
    "turkishExample": "Çocukların erken yaşlardan itibaren diğer çocuklarla etkileşim kurması gerekir."
  },
  {
    "word": "Prohibit",
    "type": "verb",
    "turkish": "Yasaklamak, men etmek",
    "example": "Smoking is strictly prohibited in this building.",
    "turkishExample": "Bu binada sigara içmek kesinlikle yasaktır."
  },
  {
    "word": "Submit",
    "type": "verb",
    "turkish": "Sunmak, boyun eğmek, teslim etmek",
    "example": "Please submit your reports by Wednesday.",
    "turkishExample": "Lütfen raporlarınızı Çarşamba gününe kadar teslim edin."
  },
  {
    "word": "Flair",
    "type": "noun",
    "turkish": "Yetenek, sezgi, şıklık",
    "example": "She has a real flair for interior design.",
    "turkishExample": "İç tasarım konusunda gerçek bir yeteneği var."
  },
  {
    "word": "Mishap",
    "type": "noun",
    "turkish": "Aksilik, talihsizlik, küçük kaza",
    "example": "The journey was completed without any major mishaps.",
    "turkishExample": "Yolculuk herhangi bir büyük aksilik yaşanmadan tamamlandı."
  },
  {
    "word": "Legacy",
    "type": "noun",
    "turkish": "Miras, vasiyet",
    "example": "He left a great legacy of scientific discoveries.",
    "turkishExample": "Geriye büyük bir bilimsel keşif mirası bıraktı."
  },
  {
    "word": "Delinquency",
    "type": "noun",
    "turkish": "Suçluluk, görev ihmali",
    "example": "The city is struggling to deal with rising juvenile delinquency.",
    "turkishExample": "Şehir, artan genç suçluluğuyla başa çıkmakta zorlanıyor.",
    "suffix": "ency"
  },
  {
    "word": "Confirm",
    "type": "verb",
    "turkish": "Onaylamak, doğrulamak, pekiştirmek",
    "example": "The tests confirmed that she was pregnant.",
    "turkishExample": "Testler hamile olduğunu doğruladı."
  },
  {
    "word": "Condense",
    "type": "verb",
    "turkish": "Sıvılaşmak, yoğunlaşmak, kısaltmak",
    "example": "Steam condenses into water as it cools.",
    "turkishExample": "Buhar soğudukça suya dönüşür."
  },
  {
    "word": "Disparity",
    "type": "noun",
    "turkish": "Eşitsizlik, farklılık, fark",
    "example": "There is a huge disparity between the rich and the poor.",
    "turkishExample": "Zenginler ve fakirler arasında büyük bir eşitsizlik var.",
    "suffix": "ity"
  },
  {
    "word": "Admit",
    "type": "verb",
    "turkish": "Kabul etmek, itiraf etmek, içeri almak",
    "example": "He admitted that he had made a mistake.",
    "turkishExample": "Bir hata yaptığını itiraf etti."
  },
  {
    "word": "Aspire",
    "type": "verb",
    "turkish": "Can atmak, hedeflemek, arzu etmek",
    "example": "Many young people aspire to be famous.",
    "turkishExample": "Pek çok genç ünlü olmayı arzular."
  },
  {
    "word": "Sanction",
    "type": "noun",
    "turkish": "Yaptırım, onay, ambargo",
    "example": "The United Nations imposed sanctions on the country.",
    "turkishExample": "Birleşmiş Milletler ülkeye yaptırımlar uyguladı."
  },
  {
    "word": "Testimony",
    "type": "noun",
    "turkish": "Tanıklık, ifade, şahitlik",
    "example": "The jury was moved by the victim's emotional testimony.",
    "turkishExample": "Jüri, kurbanın duygusal ifadesinden etkilendi."
  },
  {
    "word": "Sort",
    "type": "verb",
    "turkish": "Sınıflandırmak, ayırmak, düzene sokmak",
    "example": "The mail needs to be sorted by zip code.",
    "turkishExample": "Postaların posta koduna göre ayrılması gerekiyor."
  },
  {
    "word": "Achieve",
    "type": "verb",
    "turkish": "Başarmak, elde etmek, kazanmak",
    "example": "She worked hard to achieve her goals.",
    "turkishExample": "Hedeflerine ulaşmak için çok çalıştı."
  },
  {
    "word": "Collide",
    "type": "verb",
    "turkish": "Çarpışmak, çatışmak",
    "example": "The two cars collided at the intersection.",
    "turkishExample": "İki araba kavşakta çarpıştı."
  },
  {
    "word": "Convict",
    "type": "verb",
    "turkish": "Suçlu bulmak, mahkum etmek",
    "example": "He was convicted of murder and sentenced to life in prison.",
    "turkishExample": "Cinayetten suçlu bulundu ve müebbet hapis cezasına çarptırıldı."
  },
  {
    "word": "Corroborate",
    "type": "verb",
    "turkish": "Doğrulamak, desteklemek, teyit etmek",
    "example": "The evidence corroborated the witness's story.",
    "turkishExample": "Deliller tanığın hikayesini doğruladı.",
    "suffix": "ate"
  },
  {
    "word": "Omit",
    "type": "verb",
    "turkish": "Atlamak, çıkarmak, ihmal etmek",
    "example": "Please do not omit any important details from the report.",
    "turkishExample": "Lütfen rapordan herhangi bir önemli detayı çıkarmayın."
  },
  {
    "word": "Occupy",
    "type": "verb",
    "turkish": "İşgal etmek, yer tutmak, meşgul etmek",
    "example": "The army occupied the enemy's capital city.",
    "turkishExample": "Ordu düşmanın başkentini işgal etti.",
    "suffix": "ify"
  },
  {
    "word": "Illusion",
    "type": "noun",
    "turkish": "İllüzyon, yanılsama, hayal",
    "example": "The magician created the illusion of a disappearing rabbit.",
    "turkishExample": "Sihirbaz, kaybolan bir tavşan illüzyonu yarattı.",
    "suffix": "ion"
  },
  {
    "word": "Spark",
    "type": "verb",
    "turkish": "Kıvılcım saçmak, tetiklemek, başlatmak",
    "example": "The new law sparked a lot of protests.",
    "turkishExample": "Yeni yasa pek çok protestoyu tetikledi."
  },
  {
    "word": "Promote",
    "type": "verb",
    "turkish": "Terfi ettirmek, tanıtımını yapmak, teşvik etmek",
    "example": "She was promoted to manager last month.",
    "turkishExample": "Geçen ay müdürlüğe terfi ettirildi."
  },
  {
    "word": "Query",
    "type": "verb",
    "turkish": "Sorgulamak, sormak, kuşku duymak",
    "example": "He queried the accuracy of the report.",
    "turkishExample": "Raporun doğruluğunu sorguladı."
  },
  {
    "word": "Sustenance",
    "type": "noun",
    "turkish": "Besin, gıda, geçim",
    "example": "They had no food or means of sustenance.",
    "turkishExample": "Hiç yiyecekleri veya geçim kaynakları yoktu.",
    "suffix": "ance"
  },
  {
    "word": "Stimulate",
    "type": "verb",
    "turkish": "Uyarmak, canlandırmak, teşvik etmek",
    "example": "The lower interest rates are intended to stimulate the economy.",
    "turkishExample": "Düşük faiz oranları ekonomiyi canlandırmayı hedefliyor.",
    "suffix": "ate"
  },
  {
    "word": "Incentive",
    "type": "noun",
    "turkish": "Teşvik, güdü, ödül",
    "example": "The government offers tax incentives to small businesses.",
    "turkishExample": "Hükümet küçük işletmelere vergi teşvikleri sunuyor."
  },
  {
    "word": "Grant",
    "type": "noun",
    "turkish": "Hibe, burs, bağış",
    "example": "The university received a grant for scientific research.",
    "turkishExample": "Üniversite bilimsel araştırma için bir hibe aldı."
  },
  {
    "word": "Dawn",
    "type": "noun",
    "turkish": "Şafak, gün ağarması, başlangıç",
    "example": "They started their journey at the break of dawn.",
    "turkishExample": "Yolculuklarına şafak vaktinde başladılar."
  },
  {
    "word": "Distinguish",
    "type": "verb",
    "turkish": "Ayırt etmek, seçmek, tanımak",
    "example": "It is difficult to distinguish between the two identical twins.",
    "turkishExample": "İki tek yumurta ikizini birbirinden ayırt etmek zordur.",
    "suffix": "ish"
  },
  {
    "word": "Detention",
    "type": "noun",
    "turkish": "Gözaltı, tutuklama",
    "example": "He was held in police detention for several hours.",
    "turkishExample": "Birkaç saat poliste gözaltında tutuldu.",
    "suffix": "tion"
  },
  {
    "word": "Faith",
    "type": "noun",
    "turkish": "İnanış, inanç, güven",
    "example": "She has a strong faith in the power of prayer.",
    "turkishExample": "Duanın gücüne dair güçlü bir inancı var."
  },
  {
    "word": "Assess",
    "type": "verb",
    "turkish": "Değerlendirmek, değer biçmek",
    "example": "The committee will assess the damage caused by the fire.",
    "turkishExample": "Komite yangının neden olduğu hasarı değerlendirecek."
  },
  {
    "word": "Undertake",
    "type": "verb",
    "turkish": "Üstlenmek, girişmek, söz vermek",
    "example": "The company decided to undertake a new project.",
    "turkishExample": "Şirket yeni bir projeye girişmeye karar verdi."
  },
  {
    "word": "Sacrifice",
    "type": "verb",
    "turkish": "Feda etmek, kurban etmek",
    "example": "They sacrificed their own happiness for the sake of their children.",
    "turkishExample": "Çocuklarının hatırı için kendi mutluluklarını feda ettiler."
  },
  {
    "word": "Annul",
    "type": "verb",
    "turkish": "İptal etmek, feshetmek, geçersiz kılmak",
    "example": "The marriage was annulled after only a few months.",
    "turkishExample": "Evlilik sadece birkaç ay sonra iptal edildi."
  },
  {
    "word": "Ease",
    "type": "verb",
    "turkish": "Kolaylaştırmak, rahatlatmak, gevşetmek",
    "example": "The new medicine will help to ease the pain.",
    "turkishExample": "Yeni ilaç ağrıyı hafifletmeye yardımcı olacak."
  },
  {
    "word": "Creep",
    "type": "verb",
    "turkish": "Sürünmek, sinsice sokulmak",
    "example": "A cat was seen to creep through the tall grass.",
    "turkishExample": "Bir kedinin uzun otların arasından sinsice geçtiği görüldü."
  },
  {
    "word": "Deplete",
    "type": "verb",
    "turkish": "Tüketmek, bitirmek, boşaltmak",
    "example": "The natural resources are being rapidly depleted.",
    "turkishExample": "Doğal kaynaklar hızla tükeniyor."
  },
  {
    "word": "Commence",
    "type": "verb",
    "turkish": "Başlamak, başlatmak",
    "example": "The ceremony will commence at 10 AM.",
    "turkishExample": "Tören saat 10'da başlayacak."
  },
  {
    "word": "Retrieve",
    "type": "verb",
    "turkish": "Geri almak, yeniden bulmak, (bilgi) geri çağırmak",
    "example": "He managed to retrieve his lost files from the computer.",
    "turkishExample": "Bilgisayardan kayıp dosyalarını geri almayı başardı."
  },
  {
    "word": "Glance",
    "type": "noun",
    "turkish": "Göz atma, bakış",
    "example": "He took a quick glance at his watch.",
    "turkishExample": "Saatine hızlıca bir göz attı."
  },
  {
    "word": "Impoverish",
    "type": "verb",
    "turkish": "Yoksullaştırmak, fakirleştirmek, verimsizleştirmek",
    "example": "The long war impoverished the whole country.",
    "turkishExample": "Uzun süren savaş tüm ülkeyi yoksullaştırdı.",
    "suffix": "ish"
  },
  {
    "word": "Inherit",
    "type": "verb",
    "turkish": "Miras almak, kalıtım yoluyla almak",
    "example": "She inherited a large fortune from her grandmother.",
    "turkishExample": "Büyükannesinden büyük bir servet miras kaldı."
  },
  {
    "word": "Precaution",
    "type": "noun",
    "turkish": "Önlem, tedbir",
    "example": "You should take precautions against the cold weather.",
    "turkishExample": "Soğuk havaya karşı önlem almalısınız.",
    "suffix": "tion"
  },
  {
    "word": "Squeeze",
    "type": "verb",
    "turkish": "Sıkmak, sıkıştırmak",
    "example": "He squeezed the juice out of the orange.",
    "turkishExample": "Portakalın suyunu sıktı."
  },
  {
    "word": "Restrain",
    "type": "verb",
    "turkish": "Dizginlemek, kısıtlamak, zapt etmek",
    "example": "He had to restrain himself from shouting.",
    "turkishExample": "Bağırmamak için kendini zapt etmek zorunda kaldı."
  },
  {
    "word": "Occur",
    "type": "verb",
    "turkish": "Meydana gelmek, olmak, akla gelmek",
    "example": "The accident occurred at around 10 PM.",
    "turkishExample": "Kaza akşam saat 10 sularında meydana geldi."
  },
  {
    "word": "Obstruct",
    "type": "verb",
    "turkish": "Engellemek, tıkamak, mani olmak",
    "example": "A fallen tree was obstructing the road.",
    "turkishExample": "Devrilmiş bir ağaç yolu tıkıyordu."
  },
  {
    "word": "Offspring",
    "type": "noun",
    "turkish": "Yavru, döl, evlat",
    "example": "Birds defend their offspring against predators.",
    "turkishExample": "Kuşlar yavrularını yırtıcılara karşı savunurlar."
  },
  {
    "word": "Odor",
    "type": "noun",
    "turkish": "Koku",
    "example": "There was a strange odor coming from the kitchen.",
    "turkishExample": "Mutfaktan garip bir koku geliyordu."
  },
  {
    "word": "Obstacle",
    "type": "noun",
    "turkish": "Engel, mani",
    "example": "Lack of money is the main obstacle to the project.",
    "turkishExample": "Para eksikliği projenin önündeki temel engeldir."
  },
  {
    "word": "Clarity",
    "type": "noun",
    "turkish": "Berraklık, açıklık, netlik",
    "example": "He spoke with great clarity and confidence.",
    "turkishExample": "Büyük bir netlik ve özgüvenle konuştu.",
    "suffix": "ity"
  },
  {
    "word": "Convey",
    "type": "verb",
    "turkish": "İletmek, taşımak, ifade etmek",
    "example": "I will convey your message to the manager.",
    "turkishExample": "Mesajınızı müdüre ileteceğim."
  },
  {
    "word": "Differentiate",
    "type": "verb",
    "turkish": "Ayırt etmek, farklılaştırmak",
    "example": "It is important to differentiate between facts and opinions.",
    "turkishExample": "Gerçekler ile görüşler arasında ayrım yapmak önemlidir.",
    "suffix": "ate"
  },
  {
    "word": "Execute",
    "type": "verb",
    "turkish": "Yürütmek, yerine getirmek, idam etmek",
    "example": "The plan was executed perfectly.",
    "turkishExample": "Plan kusursuz bir şekilde uygulandı.",
    "suffix": "ate"
  },
  {
    "word": "For",
    "type": "verb",
    "turkish": "İçin, -den dolayı, lehine",
    "example": "I'm looking for my keys.",
    "turkishExample": "Anahtarlarımı arıyorum."
  },
  {
    "word": "Pursuit",
    "type": "noun",
    "turkish": "Takip, kovalama, uğraş",
    "example": "He spent his life in the pursuit of happiness.",
    "turkishExample": "Hayatını mutluluk peşinde koşarak geçirdi."
  },
  {
    "word": "Calamity",
    "type": "noun",
    "turkish": "Felaket, afet, büyük yıkım",
    "example": "The earthquake was a great calamity for the whole region.",
    "turkishExample": "Deprem tüm bölge için büyük bir felaketti.",
    "suffix": "ity"
  },
  {
    "word": "With",
    "type": "verb",
    "turkish": "İle, birlikte",
    "example": "I went to the cinema with my friends.",
    "turkishExample": "Arkadaşlarımla sinemaya gittim."
  },
  {
    "word": "Undermine",
    "type": "verb",
    "turkish": "Baltalamak, temelini kazmak, zayıflatmak",
    "example": "Criticism can undermine a person's self-confidence.",
    "turkishExample": "Eleştiri bir kişinin özgüvenini baltalayabilir."
  },
  {
    "word": "Fabric",
    "type": "noun",
    "turkish": "Kumaş, doku, yapı",
    "example": "This fabric is very soft and comfortable.",
    "turkishExample": "Bu kumaş çok yumuşak ve rahat."
  },
  {
    "word": "Emit",
    "type": "verb",
    "turkish": "Yaymak, çıkarmak (ışık, gaz vb.)",
    "example": "The sun emits light and heat.",
    "turkishExample": "Güneş ışık ve ısı yayar."
  },
  {
    "word": "Endorse",
    "type": "verb",
    "turkish": "Onaylamak, desteklemek, arkasında durmak",
    "example": "The celebrity endorsed a new line of sports shoes.",
    "turkishExample": "Ünlü isim, yeni bir spor ayakkabı serisini destekledi."
  },
  {
    "word": "Enhance",
    "type": "verb",
    "turkish": "Geliştirmek, artırmak, iyileştirmek",
    "example": "The new lighting will enhance the beauty of the room.",
    "turkishExample": "Yeni aydınlatma odanın güzelliğini artıracak."
  },
  {
    "word": "Diminish",
    "type": "verb",
    "turkish": "Azalmak, eksilmek, küçültmek",
    "example": "The power of the monarch began to diminish.",
    "turkishExample": "Hükümdarın gücü azalmaya başladı.",
    "suffix": "ish"
  },
  {
    "word": "Contemplate",
    "type": "verb",
    "turkish": "Düşünmek, tasarlamak, kafa yormak",
    "example": "He is contemplating a career change.",
    "turkishExample": "Kariyer değişikliği yapmayı düşünüyor.",
    "suffix": "ate"
  },
  {
    "word": "Malnutrition",
    "type": "noun",
    "turkish": "Yetersiz beslenme, kötü beslenme",
    "example": "Many children in the world suffer from malnutrition.",
    "turkishExample": "Dünyadaki pek çok çocuk yetersiz beslenmeden muzdarip.",
    "suffix": "tion"
  },
  {
    "word": "Surpass",
    "type": "verb",
    "turkish": "Aşmak, geçmek, geride bırakmak",
    "example": "Her performance surpassed all our expectations.",
    "turkishExample": "Performansı tüm beklentilerimizi aştı."
  },
  {
    "word": "Hamper",
    "type": "verb",
    "turkish": "Engellemek, aksatmak, güçleştirmek",
    "example": "The lack of funds hampered the research project.",
    "turkishExample": "Fon eksikliği araştırma projesini aksattı."
  },
  {
    "word": "Grievance",
    "type": "noun",
    "turkish": "Şikayet, yakınma, sitem",
    "example": "They have several grievances against the management.",
    "turkishExample": "Yönetime karşı birkaç şikayetleri var.",
    "suffix": "ance"
  },
  {
    "word": "Hazard",
    "type": "noun",
    "turkish": "Tehlike, risk",
    "example": "Smoking is a serious health hazard.",
    "turkishExample": "Sigara içmek ciddi bir sağlık tehlikesidir."
  },
  {
    "word": "Fluctuate",
    "type": "verb",
    "turkish": "Dalgalanmak, değişkenlik göstermek",
    "example": "Oil prices have fluctuated wildly over the last few months.",
    "turkishExample": "Petrol fiyatları son birkaç ayda çılgınca dalgalandı.",
    "suffix": "ate"
  },
  {
    "word": "Reign",
    "type": "verb",
    "turkish": "Hüküm sürmek, saltanat sürmek",
    "example": "King Edward reigned for only a few months.",
    "turkishExample": "Kral Edward sadece birkaç ay hüküm sürdü."
  },
  {
    "word": "Offend",
    "type": "verb",
    "turkish": "Gücendirmek, kırmak, suç işlemek",
    "example": "I'm sorry if I offended you; it was not my intention.",
    "turkishExample": "Seni kırdıysam özür dilerim; niyetim bu değildi."
  },
  {
    "word": "Oppress",
    "type": "verb",
    "turkish": "Zulmetmek, baskı yapmak, bunaltmak",
    "example": "The people were oppressed by the brutal regime.",
    "turkishExample": "Halk acımasız rejim tarafından eziliyordu."
  },
  {
    "word": "Culprit",
    "type": "noun",
    "turkish": "Suçlu, zanlı, neden",
    "example": "Police are still looking for the culprit of the theft.",
    "turkishExample": "Polis hala hırsızlığın suçlusunu arıyor."
  },
  {
    "word": "Esteem",
    "type": "noun",
    "turkish": "Saygı, itibar, değer",
    "example": "He is held in high esteem by his colleagues.",
    "turkishExample": "Meslektaşları tarafından kendisine büyük saygı duyulur."
  },
  {
    "word": "Wander",
    "type": "verb",
    "turkish": "Dolaşmak, gezinmek, sapmak",
    "example": "They wandered through the forest for hours.",
    "turkishExample": "Ormanda saatlerce dolaştılar."
  },
  {
    "word": "Vaccinate",
    "type": "verb",
    "turkish": "Aşılamak",
    "example": "It is important to vaccinate children against infectious diseases.",
    "turkishExample": "Çocukları bulaşıcı hastalıklara karşı aşılamak önemlidir.",
    "suffix": "ate"
  },
  {
    "word": "Augment",
    "type": "verb",
    "turkish": "Artırmak, çoğaltmak, ilave etmek",
    "example": "She had to take a second job to augment her income.",
    "turkishExample": "Gelirini artırmak için ikinci bir işe girmek zorunda kaldı."
  },
  {
    "word": "Abuse",
    "type": "verb",
    "turkish": "Kötüye kullanmak, suistimal etmek, taciz etmek",
    "example": "They abused their power to get what they wanted.",
    "turkishExample": "İstediklerini elde etmek için güçlerini kötüye kullandılar."
  },
  {
    "word": "Accept",
    "type": "verb",
    "turkish": "Kabul etmek, onaylamak",
    "example": "They accepted our invitation to the party.",
    "turkishExample": "Parti davetimizi kabul ettiler."
  },
  {
    "word": "Astonish",
    "type": "verb",
    "turkish": "Şaşırtmak, hayrete düşürmek",
    "example": "Her intelligence astonished everyone in the room.",
    "turkishExample": "Zekası odadaki herkesi hayrete düşürdü.",
    "suffix": "ish"
  },
  {
    "word": "Temper",
    "type": "noun",
    "turkish": "Öfke, huy, mizaç",
    "example": "He has a very short temper and gets angry easily.",
    "turkishExample": "Çok çabuk parlayan bir mizacı var ve kolayca sinirleniyor."
  },
  {
    "word": "Desert",
    "type": "verb",
    "turkish": "Terk etmek, firar etmek",
    "example": "He deserted his post during the battle.",
    "turkishExample": "Savaş sırasında görev yerini terk etti."
  },
  {
    "word": "Deplore",
    "type": "verb",
    "turkish": "Esef etmek, üzüntü duymak, kınamak",
    "example": "We deplore the use of violence to solve problems.",
    "turkishExample": "Sorunları çözmek için şiddet kullanılmasını kınıyoruz."
  },
  {
    "word": "Outcome",
    "type": "noun",
    "turkish": "Sonuç, netice",
    "example": "We are waiting for the outcome of the meeting.",
    "turkishExample": "Toplantının sonucunu bekliyoruz."
  },
  {
    "word": "Overlap",
    "type": "verb",
    "turkish": "Üst üste binmek, örtüşmek",
    "example": "The two meetings overlap, so I can only attend one.",
    "turkishExample": "İki toplantı çakışıyor, bu yüzden sadece birine katılabilirim."
  },
  {
    "word": "Repent",
    "type": "verb",
    "turkish": "Pişman olmak, tövbe etmek",
    "example": "He later repented of his decision.",
    "turkishExample": "Daha sonra kararından pişman oldu."
  },
  {
    "word": "Prejudice",
    "type": "noun",
    "turkish": "Önyargı",
    "example": "There is a deep prejudice against immigrants in some societies.",
    "turkishExample": "Bazı toplumlarda göçmenlere karşı derin bir önyargı var."
  },
  {
    "word": "Talent",
    "type": "noun",
    "turkish": "Yetenek, kabiliyet",
    "example": "She has a natural talent for playing the piano.",
    "turkishExample": "Piyano çalma konusunda doğal bir yeteneği var."
  },
  {
    "word": "Subsidy",
    "type": "noun",
    "turkish": "Sübvansiyon, devlet desteği",
    "example": "The government provides a subsidy to farmers.",
    "turkishExample": "Hükümet çiftçilere bir sübvansiyon sağlıyor."
  },
  {
    "word": "Swamp",
    "type": "noun",
    "turkish": "Bataklık",
    "example": "The area is covered with thick swamps.",
    "turkishExample": "Bölge kalın bataklıklarla kaplı."
  },
  {
    "word": "Swell",
    "type": "verb",
    "turkish": "Şişmek, kabarmak, artmak",
    "example": "Her ankle began to swell after she fell.",
    "turkishExample": "Düştükten sonra ayak bileği şişmeye başladı."
  },
  {
    "word": "Strain",
    "type": "verb",
    "turkish": "Zorlamak, süzmek, germek",
    "example": "The heavy workload is putting a strain on her health.",
    "turkishExample": "Ağır iş yükü sağlığını zorluyor."
  },
  {
    "word": "Inspire",
    "type": "verb",
    "turkish": "İlham vermek, esinlenmek",
    "example": "The teacher's words inspired the students to work harder.",
    "turkishExample": "Öğretmenin sözleri öğrencilere daha sıkı çalışmaları için ilham verdi."
  },
  {
    "word": "Gift",
    "type": "noun",
    "turkish": "Hediye, yetenek, kabiliyet",
    "example": "He had a natural gift for languages.",
    "turkishExample": "Onun dillere karşı doğal bir yeteneği vardı."
  },
  {
    "word": "Legend",
    "type": "noun",
    "turkish": "Efsane, söylence",
    "example": "The story of King Arthur is a famous legend.",
    "turkishExample": "Kral Arthur'un hikayesi ünlü bir efsanedir."
  },
  {
    "word": "Revenue",
    "type": "noun",
    "turkish": "Gelir, hasılat",
    "example": "The company's annual revenue has increased by 10%.",
    "turkishExample": "Şirketin yıllık geliri %10 arttı."
  },
  {
    "word": "Nutrition",
    "type": "noun",
    "turkish": "Beslenme, gıda",
    "example": "Good nutrition is essential for a healthy lifestyle.",
    "turkishExample": "İyi beslenme, sağlıklı bir yaşam tarzı için esastır.",
    "suffix": "tion"
  },
  {
    "word": "Contend",
    "type": "verb",
    "turkish": "Mücadele etmek, yarışmak, iddia etmek",
    "example": "He had to contend with several difficult problems at work.",
    "turkishExample": "İş yerinde birkaç zor sorunla mücadele etmek zorunda kaldı."
  },
  {
    "word": "Curiosity",
    "type": "noun",
    "turkish": "Merak, ilgi",
    "example": "Children have a natural curiosity about the world around them.",
    "turkishExample": "Çocukların etraflarındaki dünyaya karşı doğal bir merakları vardır.",
    "suffix": "ity"
  },
  {
    "word": "Endeavor",
    "type": "verb",
    "turkish": "Çabalamak, gayret etmek, uğraşmak",
    "example": "We will endeavor to finish the project on time.",
    "turkishExample": "Projeyi zamanında bitirmek için çaba göstereceğiz."
  },
  {
    "word": "Unease",
    "type": "noun",
    "turkish": "Huzursuzluk, tedirginlik",
    "example": "There was a growing sense of unease among the staff.",
    "turkishExample": "Personel arasında büyüyen bir huzursuzluk hissi vardı."
  },
  {
    "word": "Trait",
    "type": "noun",
    "turkish": "Özellik, karakter özelliği, kişisel nitelik",
    "example": "Patience is one of her most admirable traits.",
    "turkishExample": "Sabır, onun en takdire şayan özelliklerinden biridir."
  },
  {
    "word": "Seek",
    "type": "verb",
    "turkish": "Aramak, araştırmak, peşinde koşmak",
    "example": "The company is seeking a new marketing manager.",
    "turkishExample": "Şirket yeni bir pazarlama müdürü arıyor."
  },
  {
    "word": "Solace",
    "type": "noun",
    "turkish": "Teselli, avunma",
    "example": "He found solace in listening to classical music.",
    "turkishExample": "Klasik müzik dinlemekte teselli buldu."
  },
  {
    "word": "Treaty",
    "type": "noun",
    "turkish": "Antlaşma, pakt",
    "example": "The two countries signed a peace treaty after years of war.",
    "turkishExample": "İki ülke, yıllar süren savaştan sonra bir barış antlaşması imzaladı.",
    "suffix": "ty"
  },
  {
    "word": "Tyranny",
    "type": "noun",
    "turkish": "Zulüm, zorbalık, tiranlık",
    "example": "The people lived under the tyranny of a brutal dictator.",
    "turkishExample": "Halk, acımasız bir diktatörün zorbalığı altında yaşıyordu.",
    "suffix": "ny"
  },
  {
    "word": "Expel",
    "type": "verb",
    "turkish": "Kovmak, sürmek, atmak",
    "example": "He was expelled from school for bad behavior.",
    "turkishExample": "Kötü davranışları nedeniyle okuldan atıldı."
  },
  {
    "word": "Debate",
    "type": "verb",
    "turkish": "Tartışmak, müzakere etmek",
    "example": "The politicians debated the new health care bill.",
    "turkishExample": "Politikacılar yeni sağlık yasasını tartıştılar.",
    "suffix": "ate"
  },
  {
    "word": "Lottery",
    "type": "noun",
    "turkish": "Piyango, loto",
    "example": "He won the national lottery and became a millionaire.",
    "turkishExample": "Milli piyangoyu kazandı ve milyoner oldu.",
    "suffix": "ery"
  },
  {
    "word": "Means",
    "type": "noun",
    "turkish": "Araç, yol, yöntem, para",
    "example": "Television is an effective means of communication.",
    "turkishExample": "Televizyon etkili bir iletişim aracıdır."
  },
  {
    "word": "Merchandise",
    "type": "noun",
    "turkish": "Ticari eşya, mal",
    "example": "The store sells a variety of high-quality merchandise.",
    "turkishExample": "Mağaza çeşitli yüksek kaliteli ticari mallar satıyor."
  },
  {
    "word": "Gratitude",
    "type": "noun",
    "turkish": "Minnettarlık, şükran",
    "example": "She expressed her gratitude to everyone who helped her.",
    "turkishExample": "Kendisine yardım eden herkese minnettarlığını dile getirdi.",
    "suffix": "ude"
  },
  {
    "word": "Influence",
    "type": "noun",
    "turkish": "Etki, nüfuz",
    "example": "His parents had a great influence on his choice of career.",
    "turkishExample": "Ebeveynlerinin kariyer seçiminde büyük bir etkisi oldu.",
    "suffix": "ence"
  },
  {
    "word": "Stamina",
    "type": "noun",
    "turkish": "Dayanıklılık, direnç, yaşama gücü",
    "example": "Running a marathon requires a great deal of stamina.",
    "turkishExample": "Maraton koşmak büyük bir dayanıklılık gerektirir."
  },
  {
    "word": "Invade",
    "type": "verb",
    "turkish": "İstila etmek, saldırmak",
    "example": "The army invaded the neighboring country in the early morning.",
    "turkishExample": "Ordu sabahın erken saatlerinde komşu ülkeyi istila etti."
  },
  {
    "word": "Invariably",
    "type": "adverb",
    "turkish": "Değişmez bir şekilde, her zaman",
    "example": "The train is invariably late on Monday mornings.",
    "turkishExample": "Pazartesi sabahları tren her zaman geç kalıyor.",
    "suffix": "ably"
  },
  {
    "word": "Subsistence",
    "type": "noun",
    "turkish": "Geçim, hayatını sürdürme",
    "example": "Many families live on subsistence farming.",
    "turkishExample": "Pek çok aile geçimlik tarımla yaşıyor.",
    "suffix": "ence"
  },
  {
    "word": "Granted",
    "type": "verb",
    "turkish": "Verilen, bağışlanan, (şüphesiz ki)",
    "example": "He was granted a scholarship to study abroad.",
    "turkishExample": "Kendisine yurt dışında okuması için bir burs verildi."
  },
  {
    "word": "Humor",
    "type": "noun",
    "turkish": "Mizah, mizaj, ruh hali",
    "example": "He has a great sense of humor.",
    "turkishExample": "Harika bir mizah anlayışı var."
  },
  {
    "word": "Scholar",
    "type": "noun",
    "turkish": "Bilim insanı, bilgin, öğrenci (burslu)",
    "example": "He is a renowned scholar of classical Greek history.",
    "turkishExample": "Klasik Yunan tarihinin tanınmış bir bilginidir."
  },
  {
    "word": "Reprisal",
    "type": "noun",
    "turkish": "Misilleme, intikam",
    "example": "They feared reprisal attacks from the rebel groups.",
    "turkishExample": "İsyancı grupların misilleme saldırılarından korkuyorlardı."
  },
  {
    "word": "Compare",
    "type": "verb",
    "turkish": "Karşılaştırmak, kıyaslamak",
    "example": "It is difficult to compare the two cities.",
    "turkishExample": "İki şehri karşılaştırmak zordur."
  },
  {
    "word": "Contest",
    "type": "verb",
    "turkish": "İtiraz etmek, yarışmak, çekişmek",
    "example": "He decided to contest the results of the election.",
    "turkishExample": "Seçim sonuçlarına itiraz etmeye karar verdi."
  },
  {
    "word": "Depreciate",
    "type": "verb",
    "turkish": "Değer kaybetmek, küçümsemek",
    "example": "New cars depreciate in value as soon as they leave the showroom.",
    "turkishExample": "Yeni arabalar galeriden çıkar çıkmaz değer kaybeder.",
    "suffix": "ate"
  },
  {
    "word": "Descent",
    "type": "noun",
    "turkish": "İniş, alçalma, soy, köken",
    "example": "The plane began its final descent into the airport.",
    "turkishExample": "Uçak havaalanına son inişine başladı.",
    "suffix": "ent"
  },
  {
    "word": "Underestimate",
    "type": "verb",
    "turkish": "Hafife almak, olduğundan az değer biçmek",
    "example": "Never underestimate the power of your opponent.",
    "turkishExample": "Rakibinizin gücünü asla hafife almayın.",
    "suffix": "ate"
  },
  {
    "word": "Trace",
    "type": "noun",
    "turkish": "İz, belirti",
    "example": "There was no trace of the missing person.",
    "turkishExample": "Kayıp şahıstan hiçbir iz yoktu."
  },
  {
    "word": "Ritual",
    "type": "noun",
    "turkish": "Ayin, ritüel, tören",
    "example": "The morning ritual of drinking coffee is important to him.",
    "turkishExample": "Sabah kahve içme ritüeli onun için önemlidir."
  },
  {
    "word": "Abandon",
    "type": "verb",
    "turkish": "Terk etmek, bırakmak, vazgeçmek",
    "example": "The sailors had to abandon the sinking ship.",
    "turkishExample": "Denizciler batan gemiyi terk etmek zorunda kaldılar."
  },
  {
    "word": "Cheat",
    "type": "verb",
    "turkish": "Aldatmak, hile yapmak",
    "example": "He was caught cheating during the exam.",
    "turkishExample": "Sınav sırasında hile yaparken yakalandı."
  },
  {
    "word": "Cease",
    "type": "verb",
    "turkish": "Durdurmak, kesmek, sona ermek",
    "example": "The company decided to cease production of the old model.",
    "turkishExample": "Şirket eski modelin üretimini durdurmaya karar verdi."
  },
  {
    "word": "Bewilder",
    "type": "verb",
    "turkish": "Şaşırtmak, hayrete düşürmek, aklını karıştırmak",
    "example": "The complex rules of the game bewildered the new players.",
    "turkishExample": "Oyunun karmaşık kuralları yeni oyuncuların aklını karıştırdı.",
    "suffix": "er"
  },
  {
    "word": "Dwell",
    "type": "verb",
    "turkish": "Yaşamak, ikamet etmek, (bir konu üzerinde) durmak",
    "example": "They dwell in a small cottage by the sea.",
    "turkishExample": "Deniz kenarında küçük bir kulübede yaşıyorlar."
  },
  {
    "word": "Exert",
    "type": "verb",
    "turkish": "Kullanmak, çaba sarf etmek, uygulamak",
    "example": "He had to exert a lot of pressure to open the door.",
    "turkishExample": "Kapıyı açmak için çok fazla baskı uygulamak zorunda kaldı."
  },
  {
    "word": "Evade",
    "type": "verb",
    "turkish": "Kaçınmak, sakınmak, kurtulmak",
    "example": "He tried to evade the police by hiding in the warehouse.",
    "turkishExample": "Depoda saklanarak polisten kaçmaya çalıştı."
  },
  {
    "word": "Explode",
    "type": "verb",
    "turkish": "Patlamak, infilak etmek",
    "example": "The bomb exploded in the middle of the city.",
    "turkishExample": "Bomba şehrin ortasında patladı."
  },
  {
    "word": "Commemorate",
    "type": "verb",
    "turkish": "Anmak, anısına tören yapmak",
    "example": "The monument was built to commemorate the soldiers who died in the war.",
    "turkishExample": "Anıt, savaşta ölen askerleri anmak için inşa edildi.",
    "suffix": "ate"
  },
  {
    "word": "Perish",
    "type": "verb",
    "turkish": "Yok olmak, can vermek, mahvolmak",
    "example": "Many people perished in the earthquake.",
    "turkishExample": "Depremde pek çok kişi can verdi.",
    "suffix": "ish"
  },
  {
    "word": "Notify",
    "type": "verb",
    "turkish": "Bildirmek, haber vermek",
    "example": "Please notify us of any change in your address.",
    "turkishExample": "Adresinizdeki herhangi bir değişikliği lütfen bize bildirin.",
    "suffix": "ify"
  },
  {
    "word": "Resume",
    "type": "verb",
    "turkish": "Yeniden başlamak, devam etmek",
    "example": "The meeting will resume after the lunch break.",
    "turkishExample": "Toplantı öğle yemeği arasından sonra devam edecek."
  },
  {
    "word": "Muster",
    "type": "verb",
    "turkish": "Toplamak, bir araya getirmek (cesaret vb.)",
    "example": "He managed to muster the courage to speak to the audience.",
    "turkishExample": "Dinleyicilere konuşma cesaretini toplamayı başardı."
  },
  {
    "word": "Lure",
    "type": "verb",
    "turkish": "Cezbetmek, yemlemek, kandırmak",
    "example": "The company uses low prices to lure customers from its rivals.",
    "turkishExample": "Şirket, rakiplerinden müşteri çekmek için düşük fiyatlar kullanıyor."
  },
  {
    "word": "Prosper",
    "type": "verb",
    "turkish": "Zenginleşmek, gelişmek, başarılı olmak",
    "example": "The city began to prosper after the new port was built.",
    "turkishExample": "Yeni liman inşa edildikten sonra şehir gelişmeye başladı."
  },
  {
    "word": "Disaster",
    "type": "noun",
    "turkish": "Felaket, afet",
    "example": "The floods were a major disaster for the local farmers.",
    "turkishExample": "Sel baskınları yerel çiftçiler için büyük bir felaketti."
  },
  {
    "word": "Frustrate",
    "type": "verb",
    "turkish": "Hüsrana uğratmak, engel olmak, sinirini bozmak",
    "example": "The complex instructions frustrated the users.",
    "turkishExample": "Karmaşık talimatlar kullanıcıları hüsrana uğrattı.",
    "suffix": "ate"
  },
  {
    "word": "Illuminate",
    "type": "verb",
    "turkish": "Aydınlatmak, ışık tutmak, açıklığa kavuşturmak",
    "example": "The streets were illuminated with colorful lights for the festival.",
    "turkishExample": "Sokaklar festival için renkli ışıklarla aydınlatıldı.",
    "suffix": "ate"
  },
  {
    "word": "Inquire",
    "type": "verb",
    "turkish": "Sormak, soruşturmak, bilgi istemek",
    "example": "I'd like to inquire about the price of the tickets.",
    "turkishExample": "Biletlerin fiyatı hakkında bilgi almak (sormak) istiyorum."
  },
  {
    "word": "Infer",
    "type": "verb",
    "turkish": "Sonuç çıkarmak, anlam çıkarmak",
    "example": "What can you infer from the evidence?",
    "turkishExample": "Kanıtlardan ne sonuç çıkarabilirsin?"
  },
  {
    "word": "Resolution",
    "type": "noun",
    "turkish": "Çözüm, karar, kararlılık, çözünürlük",
    "example": "We need to find a resolution to this conflict.",
    "turkishExample": "Bu çatışmaya bir çözüm bulmamız gerekiyor.",
    "suffix": "tion"
  },
  {
    "word": "Nominate",
    "type": "verb",
    "turkish": "Aday göstermek, atamak",
    "example": "He was nominated for the Best Actor award.",
    "turkishExample": "En İyi Erkek Oyuncu ödülüne aday gösterildi.",
    "suffix": "ate"
  },
  {
    "word": "Conform",
    "type": "verb",
    "turkish": "Uymak, uyum sağlamak, bağdaşmak",
    "example": "The products must conform to international safety standards.",
    "turkishExample": "Ürünler uluslararası güvenlik standartlarına uymalıdır."
  },
  {
    "word": "Decency",
    "type": "noun",
    "turkish": "Edep, haya, dürüstlük, terbiye",
    "example": "He didn't even have the decency to apologize.",
    "turkishExample": "Özür dileyecek kadar bile terbiyesi yoktu.",
    "suffix": "ency"
  },
  {
    "word": "Battle",
    "type": "noun",
    "turkish": "Savaş, muharebe, çatışma",
    "example": "The soldiers fought a fierce battle in the desert.",
    "turkishExample": "Askerler çölde çetin bir savaş verdiler."
  },
  {
    "word": "Slope",
    "type": "noun",
    "turkish": "Yamaç, eğim",
    "example": "The house was built on a steep slope.",
    "turkishExample": "Ev dik bir yamaç üzerine inşa edilmişti."
  },
  {
    "word": "Segregate",
    "type": "verb",
    "turkish": "Ayırmak, tecrit etmek (ırk vb.)",
    "example": "In some countries, schools were segregated by race.",
    "turkishExample": "Bazı ülkelerde okullar ırka göre ayrılmıştı.",
    "suffix": "ate"
  },
  {
    "word": "Setback",
    "type": "noun",
    "turkish": "Aksilik, yenilgi, gerileme",
    "example": "The project suffered a major setback due to technical problems.",
    "turkishExample": "Proje teknik sorunlar nedeniyle büyük bir aksilik yaşadı."
  },
  {
    "word": "Entail",
    "type": "verb",
    "turkish": "Gerektirmek, şamil olmak",
    "example": "The job entails a lot of travel and long working hours.",
    "turkishExample": "İş, çok fazla seyahat ve uzun çalışma saatleri gerektiriyor."
  },
  {
    "word": "Eradicate",
    "type": "verb",
    "turkish": "Kökünü kazımak, tamamen yok etmek",
    "example": "The government aims to eradicate poverty within a decade.",
    "turkishExample": "Hükümet on yıl içinde yoksulluğu tamamen ortadan kaldırmayı hedefliyor.",
    "suffix": "ate"
  },
  {
    "word": "Contaminate",
    "type": "verb",
    "turkish": "Kirletmek, bulaştırmak",
    "example": "The drinking water was contaminated by toxic waste.",
    "turkishExample": "İçme suyu zehirli atıklarla kirlendi.",
    "suffix": "ate"
  },
  {
    "word": "Conspiracy",
    "type": "noun",
    "turkish": "Komplo, gizli anlaşma",
    "example": "They were accused of being part of a conspiracy to overthrow the government.",
    "turkishExample": "Hükümeti devirmeye yönelik bir komplonun parçası olmakla suçlandılar.",
    "suffix": "acy"
  },
  {
    "word": "Compassion",
    "type": "noun",
    "turkish": "Merhamet, şefkat, acıma",
    "example": "She showed great compassion for the homeless and the needy.",
    "turkishExample": "Evsizlere ve muhtaçlara karşı büyük bir merhamet gösterdi.",
    "suffix": "sion"
  },
  {
    "word": "Outlay",
    "type": "noun",
    "turkish": "Masraf, harcama, gider",
    "example": "The initial outlay for the new business was quite high.",
    "turkishExample": "Yeni iş için başlangıç masrafı oldukça yüksekti."
  },
  {
    "word": "Mutiny",
    "type": "noun",
    "turkish": "Ayaklanma, isyan (askeri)",
    "example": "The sailors were arrested for attempting a mutiny on the ship.",
    "turkishExample": "Denizciler gemide isyan girişiminde bulundukları için tutuklandılar.",
    "suffix": "ny"
  },
  {
    "word": "Revenge",
    "type": "noun",
    "turkish": "İntikam, öç",
    "example": "He wanted to take revenge for the insult.",
    "turkishExample": "Hakaretin intikamını almak istiyordu."
  },
  {
    "word": "Literacy",
    "type": "noun",
    "turkish": "Okuryazarlık",
    "example": "The national literacy rate has increased significantly.",
    "turkishExample": "Milli okuryazarlık oranı önemli ölçüde arttı.",
    "suffix": "acy"
  },
  {
    "word": "Impair",
    "type": "verb",
    "turkish": "Bozmak, zayıflatmak, zarar vermek",
    "example": "Alcohol can seriously impair your ability to drive safely.",
    "turkishExample": "Alkol, güvenli sürüş yeteneğinizi ciddi şekilde bozabilir."
  },
  {
    "word": "Forbid",
    "type": "verb",
    "turkish": "Yasaklamak, men etmek",
    "example": "My parents forbid me to stay out late at night.",
    "turkishExample": "Ailem gece geç saatlere kadar dışarıda kalmamı yasaklıyor."
  },
  {
    "word": "Quarrel",
    "type": "noun",
    "turkish": "Kavga, atışma, ağız kavgası",
    "example": "They had a fierce quarrel about money.",
    "turkishExample": "Para hakkında şiddetli bir kavga ettiler."
  },
  {
    "word": "Involve",
    "type": "verb",
    "turkish": "İçermek, dahil etmek, bulaşmak",
    "example": "The project involves dozens of different organizations.",
    "turkishExample": "Proje düzinelerce farklı organizasyonu içeriyor."
  },
  {
    "word": "Jeopardize",
    "type": "verb",
    "turkish": "Tehlikeye atmak, riske etmek",
    "example": "His bad behavior could jeopardize his chances of getting the job.",
    "turkishExample": "Kötü davranışı işe girme şansını tehlikeye atabilir.",
    "suffix": "ize"
  },
  {
    "word": "Surplus",
    "type": "noun",
    "turkish": "Fazla, artık, ihtiyaç fazlası",
    "example": "The country has a trade surplus of several billion dollars.",
    "turkishExample": "Ülkenin birkaç milyar dolarlık dış ticaret fazlası var."
  },
  {
    "word": "Intimidate",
    "type": "verb",
    "turkish": "Gözdağı vermek, korkutmak",
    "example": "They tried to intimidate the witness into changing her story.",
    "turkishExample": "Tanığa hikayesini değiştirmesi için gözdağı vermeye çalıştılar.",
    "suffix": "ate"
  },
  {
    "word": "Prospect",
    "type": "noun",
    "turkish": "Olasılık, ihtimal, umut",
    "example": "The job offers excellent prospects for promotion.",
    "turkishExample": "İş, terfi için mükemmel fırsatlar sunuyor."
  },
  {
    "word": "Phase",
    "type": "noun",
    "turkish": "Evre, aşama, safha",
    "example": "We are now entering the final phase of the project.",
    "turkishExample": "Şu anda projenin son aşamasına giriyoruz."
  },
  {
    "word": "Fascinate",
    "type": "verb",
    "turkish": "Büyülemek, hayran bırakmak",
    "example": "I have always been fascinated by ancient Egyptian culture.",
    "turkishExample": "Antik Mısır kültürüne her zaman hayran kalmışımdır.",
    "suffix": "ate"
  },
  {
    "word": "Ignore",
    "type": "verb",
    "turkish": "Görmezden gelmek, ihmal etmek, yok saymak",
    "example": "He decided to ignore the warnings and continue the experiment.",
    "turkishExample": "Uyarıları görmezden gelmeye ve deneye devam etmeye karar verdi."
  },
  {
    "word": "Conceive",
    "type": "verb",
    "turkish": "Anlamak, kavramak, gebe kalmak, kurmak",
    "example": "It is difficult to conceive of a world without electricity.",
    "turkishExample": "Elektriğin olmadığı bir dünyayı hayal etmek zordur."
  },
  {
    "word": "Deficiency",
    "type": "noun",
    "turkish": "Eksiklik, yetersizlik, yoksunluk",
    "example": "A deficiency of Vitamin C can lead to health problems.",
    "turkishExample": "C vitamini eksikliği sağlık sorunlarına yol açabilir.",
    "suffix": "ency"
  },
  {
    "word": "Exclude",
    "type": "verb",
    "turkish": "Dışlamak, hariç tutmak, dahil etmemek",
    "example": "Waiters are excluded from the service charge.",
    "turkishExample": "Garsonlar servis ücretinden hariç tutulur."
  },
  {
    "word": "Exhort",
    "type": "verb",
    "turkish": "Teşvik etmek, tavsiye etmek, öğütlemek",
    "example": "The priests exhorted the people to live peaceful lives.",
    "turkishExample": "Rahipler halka barışçıl yaşamlar sürmeleri için öğüt verdiler."
  },
  {
    "word": "Dwindle",
    "type": "verb",
    "turkish": "Azalmak, küçülmek, elden gitmek",
    "example": "Support for the new policy is starting to dwindle.",
    "turkishExample": "Yeni politikaya olan destek azalmaya başlıyor."
  },
  {
    "word": "Devastate",
    "type": "verb",
    "turkish": "Yıkmak, mahvetmek, yerle bir etmek",
    "example": "The earthquake devastated the entire town.",
    "turkishExample": "Deprem tüm kasabayı yerle bir etti.",
    "suffix": "ate"
  },
  {
    "word": "Span",
    "type": "noun",
    "turkish": "Süre, zaman aralığı, mesafe",
    "example": "The life span of a butterfly is very short.",
    "turkishExample": "Kelebeklerin yaşam süresi çok kısadır."
  },
  {
    "word": "Turmoil",
    "type": "noun",
    "turkish": "Kargaşa, huzursuzluk, karışıklık",
    "example": "The country has been in political turmoil for months.",
    "turkishExample": "Ülke aylardır siyasi kargaşa içinde."
  },
  {
    "word": "Victory",
    "type": "noun",
    "turkish": "Zafer, galibiyet, başarı",
    "example": "The team celebrated their final victory with champagne.",
    "turkishExample": "Takım nihai zaferini şampanya ile kutladı.",
    "suffix": "ry"
  },
  {
    "word": "Zeal",
    "type": "noun",
    "turkish": "Şevk, gayret, heves",
    "example": "He approached his new job with great zeal.",
    "turkishExample": "Yeni işine büyük bir şevkle yaklaştı."
  },
  {
    "word": "Wreck",
    "type": "verb",
    "turkish": "Yıkmak, mahvetmek, enkaz haline getirmek",
    "example": "The storm wrecked several boats along the coast.",
    "turkishExample": "Fırtına kıyı boyundaki birkaç tekneyi enkaz haline getirdi."
  },
  {
    "word": "Yield",
    "type": "noun",
    "turkish": "Verim, kazanç, ürün",
    "example": "Farmers are expecting a high yield from this year's harvest.",
    "turkishExample": "Çiftçiler bu yılki hasattan yüksek bir verim bekliyorlar."
  },
  {
    "word": "Will",
    "type": "noun",
    "turkish": "İrade, vasiyet, istek",
    "example": "He has a strong will to survive.",
    "turkishExample": "Hayatta kalmak için güçlü bir iradesi var."
  },
  {
    "word": "Welfare",
    "type": "noun",
    "turkish": "Refah, sağlık, esenlik",
    "example": "The government is responsible for the welfare of its citizens.",
    "turkishExample": "Hükümet, vatandaşlarının refahından sorumludur."
  },
  {
    "word": "Appeal",
    "type": "verb",
    "turkish": "Başvurmak, temyiz etmek, cezbetmek, çağrıda bulunmak",
    "example": "The victim's family appealed for witnesses to come forward.",
    "turkishExample": "Kurbanın ailesi tanıkların öne çıkması için çağrıda bulundu."
  },
  {
    "word": "Divert",
    "type": "verb",
    "turkish": "Yönlendirmek, saptırmak, eğlendirmek",
    "example": "The traffic was diverted to a side street due to the accident.",
    "turkishExample": "Kaza nedeniyle trafik yan bir sokağa yönlendirildi."
  },
  {
    "word": "Compel",
    "type": "verb",
    "turkish": "Zorlamak, mecbur etmek",
    "example": "The situation compelled him to act immediately.",
    "turkishExample": "Durum onu derhal harekete geçmeye zorladı."
  },
  {
    "word": "Initiate",
    "type": "verb",
    "turkish": "Başlatmak, önayak olmak",
    "example": "The government initiated a new program to help the unemployed.",
    "turkishExample": "Hükümet işsizlere yardım etmek için yeni bir program başlattı.",
    "suffix": "ate"
  },
  {
    "word": "Incline",
    "type": "noun",
    "turkish": "Eğim, meyil, yamaç",
    "example": "The road has a slight incline towards the hill.",
    "turkishExample": "Yolun tepeye doğru hafif bir eğimi var."
  },
  {
    "word": "Provisions",
    "type": "noun",
    "turkish": "Hükümler, tedarik, gerekli azık",
    "example": "The explorers carried enough provisions for a month.",
    "turkishExample": "Kaşifler bir aylık yeterli azığı yanlarında taşıdı."
  },
  {
    "word": "Pace",
    "type": "noun",
    "turkish": "Hız, adım, tempo",
    "example": "The project is moving at a very slow pace.",
    "turkishExample": "Proje çok yavaş bir tempoyla ilerliyor."
  },
  {
    "word": "Paradox",
    "type": "noun",
    "turkish": "Paradoks, çelişki",
    "example": "It is a paradox that the more money he earns, the less happy he is.",
    "turkishExample": "Daha fazla para kazandıkça daha az mutlu olması bir paradokstur."
  },
  {
    "word": "Legislate",
    "type": "verb",
    "turkish": "Yasalaştırmak, kanun yapmak",
    "example": "The government decided to legislate against child labor.",
    "turkishExample": "Hükümet çocuk işçiliğine karşı yasa yapmaya karar verdi.",
    "suffix": "ate"
  },
  {
    "word": "Investigate",
    "type": "verb",
    "turkish": "Soruşturmak, araştırmak",
    "example": "The police are investigating the cause of the fire.",
    "turkishExample": "Polis yangının nedenini araştırıyor.",
    "suffix": "ate"
  },
  {
    "word": "Flatter",
    "type": "verb",
    "turkish": "Yağ çekmek, pohpohlamak",
    "example": "He tried to flatter the manager into giving him a promotion.",
    "turkishExample": "Müdüre yağ çekerek terfi almaya çalıştı."
  },
  {
    "word": "Fever",
    "type": "noun",
    "turkish": "Ateş, heyecan",
    "example": "The doctor checked the patient for a high fever.",
    "turkishExample": "Doktor hastanın yüksek ateşini kontrol etti."
  },
  {
    "word": "Genocide",
    "type": "noun",
    "turkish": "Soykırım",
    "example": "The international community must act to prevent genocide.",
    "turkishExample": "Uluslararası toplum soykırımı önlemek için harekete geçmelidir."
  },
  {
    "word": "Conserve",
    "type": "verb",
    "turkish": "Korumak, muhafaza etmek, tasarruf etmek",
    "example": "We must conserve energy to protect the environment.",
    "turkishExample": "Çevreyi korumak için enerjiyi tasarruflu kullanmalıyız."
  },
  {
    "word": "Display",
    "type": "verb",
    "turkish": "Sergilemek, göstermek",
    "example": "The museum displays a collection of ancient coins.",
    "turkishExample": "Müze, antik paralardan oluşan bir koleksiyon sergiliyor."
  },
  {
    "word": "Eliminate",
    "type": "verb",
    "turkish": "Elemek, ortadan kaldırmak, yok etmek",
    "example": "The goal is to eliminate poverty in the region.",
    "turkishExample": "Hedef, bölgedeki yoksulluğu ortadan kaldırmaktır.",
    "suffix": "ate"
  },
  {
    "word": "Dispense",
    "type": "verb",
    "turkish": "Dağıtmak, vermek, eczacılıkta ilaç hazırlamak",
    "example": "The machine dispenses hot and cold drinks.",
    "turkishExample": "Makine sıcak ve soğuk içecekler veriyor."
  },
  {
    "word": "Era",
    "type": "noun",
    "turkish": "Dönem, çağ, devir",
    "example": "The Renaissance was an era of great discovery.",
    "turkishExample": "Rönesans büyük keşiflerin yapıldığı bir çağdı."
  },
  {
    "word": "Allure",
    "type": "verb",
    "turkish": "Cezbetmek, çekmek, baştan çıkarmak",
    "example": "The allure of power is very strong.",
    "turkishExample": "Gücün çekiciliği (cezbi) çok güçlüdür."
  },
  {
    "word": "Alienate",
    "type": "verb",
    "turkish": "Yabancılaştırmak, soğutmak, uzaklaştırmak",
    "example": "His comments alienated many of his supporters.",
    "turkishExample": "Yorumları pek çok destekçisini kendisinden uzaklaştırdı.",
    "suffix": "ate"
  },
  {
    "word": "Acknowledge",
    "type": "verb",
    "turkish": "Kabul etmek, tanımak, onaylamak, (mesaj vb.) aldığını bildirmek",
    "example": "Please acknowledge receipt of this letter.",
    "turkishExample": "Lütfen bu mektubu aldığınızı bildirin."
  },
  {
    "word": "Aptitude",
    "type": "noun",
    "turkish": "Yetenek, kabiliyet, meyil",
    "example": "He showed a natural aptitude for mathematics from an early age.",
    "turkishExample": "Küçük yaştan itibaren matematiğe karşı doğal bir yetenek gösterdi.",
    "suffix": "ude"
  },
  {
    "word": "Bear",
    "type": "verb",
    "turkish": "Dayanmak, katlanmak, taşımak, (meyve vb.) vermek",
    "example": "I can't bear the thought of losing you.",
    "turkishExample": "Seni kaybetme düşüncesine katlanamıyorum."
  },
  {
    "word": "Cancel",
    "type": "verb",
    "turkish": "İptal etmek, geçersiz kılmak",
    "example": "The trip was cancelled due to the heavy rain.",
    "turkishExample": "Yolculuk şiddetli yağmur nedeniyle iptal edildi."
  },
  {
    "word": "Disrupt",
    "type": "verb",
    "turkish": "Bozmak, aksatmak, bölmek",
    "example": "The protest disrupted the traffic for several hours.",
    "turkishExample": "Protesto trafiği birkaç saat boyunca aksattı."
  },
  {
    "word": "Donate",
    "type": "verb",
    "turkish": "Bağış yapmak, hibe etmek",
    "example": "They donated a lot of money to the local children's hospital.",
    "turkishExample": "Yerel çocuk hastanesine çok miktarda para bağışladılar.",
    "suffix": "ate"
  },
  {
    "word": "Compile",
    "type": "verb",
    "turkish": "Derlemek, toplamak, bir araya getirmek",
    "example": "She spent months compiling data for her research.",
    "turkishExample": "Araştırması için veri derlemekle aylarını harcadı."
  },
  {
    "word": "Interrogate",
    "type": "verb",
    "turkish": "Sorguya çekmek, soru sormak",
    "example": "The suspects were interrogated by the police for several hours.",
    "turkishExample": "Şüpheliler polis tarafından birkaç saat boyunca sorgulandı.",
    "suffix": "ate"
  },
  {
    "word": "Perceive",
    "type": "verb",
    "turkish": "Sezmek, algılamak, fark etmek",
    "example": "Cats can perceive movements that are invisible to humans.",
    "turkishExample": "Kediler, insanlar için görünmez olan hareketleri algılayabilirler."
  },
  {
    "word": "Overcome",
    "type": "verb",
    "turkish": "Üstesinden gelmek, yenmek, bastırmak",
    "example": "She finally overcame her fear of flying.",
    "turkishExample": "Nihayet uçuş korkusunun üstesinden geldi."
  },
  {
    "word": "Relish",
    "type": "verb",
    "turkish": "Zevk almak, tadını çıkarmak, hoşuna gitmek",
    "example": "He relishes the challenge of starting a new business.",
    "turkishExample": "Yeni bir iş kurmanın zorluğundan zevk alıyor.",
    "suffix": "ish"
  },
  {
    "word": "Reversal",
    "type": "noun",
    "turkish": "Tersine dönme, iptal, geri çevirme",
    "example": "The decision was a major reversal of government policy.",
    "turkishExample": "Karar, hükümet politikasının büyük bir geri dönüşüydü.",
    "suffix": "al"
  },
  {
    "word": "Merge",
    "type": "verb",
    "turkish": "Birleşmek, kaynaşmak, birleştirmek",
    "example": "The two small companies decided to merge to form a larger one.",
    "turkishExample": "İki küçük şirket, daha büyük bir şirket oluşturmak için birleşmeye karar verdi."
  },
  {
    "word": "Persuade",
    "type": "verb",
    "turkish": "İkna etmek, razı etmek",
    "example": "He managed to persuade his parents to let him go to the party.",
    "turkishExample": "Ailesini partiye gitmesine izin vermeleri için ikna etmeyi başardı."
  },
  {
    "word": "Irritate",
    "type": "verb",
    "turkish": "Tahriş etmek, kızdırmak, sinirlendirmek",
    "example": "Smoke can irritate your eyes.",
    "turkishExample": "Duman gözlerinizi tahriş edebilir.",
    "suffix": "ate"
  },
  {
    "word": "Dilemma",
    "type": "noun",
    "turkish": "İkilem, çıkmaz",
    "example": "She was faced with a difficult dilemma.",
    "turkishExample": "Zor bir ikilemle karşı karşıya kaldı."
  },
  {
    "word": "Evaluate",
    "type": "verb",
    "turkish": "Değerlendirmek, değer biçmek",
    "example": "We need to evaluate the success of the new project.",
    "turkishExample": "Yeni projenin başarısını değerlendirmemiz gerekiyor.",
    "suffix": "ate"
  },
  {
    "word": "Evolve",
    "type": "verb",
    "turkish": "Evrim geçirmek, gelişmek, dönüşmek",
    "example": "Life on Earth has evolved over millions of years.",
    "turkishExample": "Dünyadaki yaşam milyonlarca yıl içinde evrimleşmiştir."
  },
  {
    "word": "Breed",
    "type": "verb",
    "turkish": "Üremek, yetiştirmek, (kötü bir şeye) yol açmak",
    "example": "They breed horses on their farm.",
    "turkishExample": "Çiftliklerinde at yetiştiriyorlar."
  },
  {
    "word": "Bribery",
    "type": "noun",
    "turkish": "Rüşvet verme, rüşvetçilik",
    "example": "The official was arrested for bribery and corruption.",
    "turkishExample": "Yetkili, rüşvet ve yolsuzluktan tutuklandı.",
    "suffix": "ery"
  },
  {
    "word": "Assemble",
    "type": "verb",
    "turkish": "Birleştirmek, monte etmek, toplanmak",
    "example": "The students assembled in the hall for the meeting.",
    "turkishExample": "Öğrenciler toplantı için salonda toplandılar."
  },
  {
    "word": "Advance",
    "type": "verb",
    "turkish": "İlerlemek, gelişmek, (para) avans vermek",
    "example": "Technology is advancing at an incredibly rapid pace.",
    "turkishExample": "Teknoloji inanılmaz derecede hızlı bir tempoyla ilerliyor."
  },
  {
    "word": "Allege",
    "type": "verb",
    "turkish": "İddia etmek, ileri sürmek",
    "example": "They alleged that the company had hidden its losses.",
    "turkishExample": "Şirketin zararlarını gizlediğini iddia ettiler."
  },
  {
    "word": "Census",
    "type": "noun",
    "turkish": "Nüfus sayımı",
    "example": "The national census is carried out every ten years.",
    "turkishExample": "Milli nüfus sayımı her on yılda bir yapılır."
  },
  {
    "word": "Betray",
    "type": "verb",
    "turkish": "İhanet etmek, ele vermek, açık etmek",
    "example": "He was accused of betraying his country's secrets.",
    "turkishExample": "Ülkesinin sırlarına ihanet etmekle suçlandı."
  },
  {
    "word": "Boom",
    "type": "verb",
    "turkish": "Gürlemek, hızla gelişmek, patlama yapmak",
    "example": "The local economy is booming thanks to the new tourism center.",
    "turkishExample": "Yerel ekonomi yeni turizm merkezi sayesinde patlama yaşıyor."
  },
  {
    "word": "Erect",
    "type": "verb",
    "turkish": "Dikmek, inşa etmek, kurmak",
    "example": "A new monument was erected in the park.",
    "turkishExample": "Parkta yeni bir anıt dikildi."
  },
  {
    "word": "Elude",
    "type": "verb",
    "turkish": "Kaçmak, kurtulmak, aklı ermemek",
    "example": "The criminal managed to elude the police for weeks.",
    "turkishExample": "Suçlu haftalarca polisten kaçmayı başardı."
  },
  {
    "word": "Embezzle",
    "type": "verb",
    "turkish": "Zimmetine geçirmek, yolsuzluk yapmak",
    "example": "He was charged with embezzling company funds.",
    "turkishExample": "Şirket fonlarını zimmetine geçirmekle suçlandı."
  },
  {
    "word": "Elicit",
    "type": "verb",
    "turkish": "Aydınlatmak, meydana çıkarmak, (bilgi vb.) almak",
    "example": "The police tried to elicit information from the witness.",
    "turkishExample": "Polis tanıktan bilgi almaya çalıştı."
  },
  {
    "word": "Comprise",
    "type": "verb",
    "turkish": "Kapsamak, içermek, -den oluşmak",
    "example": "The committee comprises of ten members.",
    "turkishExample": "Komite on üyeden oluşmaktadır."
  },
  {
    "word": "Compromise",
    "type": "verb",
    "turkish": "Uzlaşmak, ödün vermek, tehlikeye atmak",
    "example": "We had to compromise to reach an agreement.",
    "turkishExample": "Bir anlaşmaya varmak için uzlaşmak zorunda kaldık."
  },
  {
    "word": "Console",
    "type": "verb",
    "turkish": "Teselli etmek, avutmak",
    "example": "She tried to console her friend who was crying.",
    "turkishExample": "Ağlayan arkadaşını teselli etmeye çalıştı."
  },
  {
    "word": "Constitute",
    "type": "verb",
    "turkish": "Oluşturmak, teşkil etmek, kurmak",
    "example": "These documents constitute evidence against him.",
    "turkishExample": "Bu belgeler onun aleyhine kanıt teşkil ediyor."
  },
  {
    "word": "Depict",
    "type": "verb",
    "turkish": "Betimlemek, tasvir etmek, resmetmek",
    "example": "The painting depicts a scene from the French Revolution.",
    "turkishExample": "Tablo Fransız Devrimi'nden bir sahneyi betimliyor."
  },
  {
    "word": "Impose",
    "type": "verb",
    "turkish": "Dayatmak, (vergi vb.) koymak, yüklemek",
    "example": "The government imposed a new tax on luxury goods.",
    "turkishExample": "Hükümet lüks tüketim mallarına yeni bir vergi koydu."
  },
  {
    "word": "Intrude",
    "type": "verb",
    "turkish": "Davetsiz girmek, rahatsız etmek, zorla girmek",
    "example": "I'm sorry to intrude, but I have an urgent message for you.",
    "turkishExample": "Böldüğüm için özür dilerim ama size acil bir mesajım var."
  },
  {
    "word": "Intervene",
    "type": "verb",
    "turkish": "Müdahale etmek, araya girmek",
    "example": "The government had to intervene to stop the crisis.",
    "turkishExample": "Krizi durdurmak için hükümet müdahale etmek zorunda kaldı."
  },
  {
    "word": "Interpret",
    "type": "verb",
    "turkish": "Yorumlamak, tercüme etmek, anlamlandırmak",
    "example": "How do you interpret the results of the experiment?",
    "turkishExample": "Deneyin sonuçlarını nasıl yorumluyorsunuz?"
  },
  {
    "word": "Goods",
    "type": "noun",
    "turkish": "Eşya, mallar, ticari eşya",
    "example": "The company produces electronic goods.",
    "turkishExample": "Şirket elektronik eşyalar üretiyor."
  },
  {
    "word": "Feature",
    "type": "noun",
    "turkish": "Özellik, nitelik, çehre, başrol",
    "example": "The main feature of the new model is its energy efficiency.",
    "turkishExample": "Yeni modelin ana özelliği enerji verimliliğidir."
  },
  {
    "word": "Obviate",
    "type": "verb",
    "turkish": "Gerek bırakmamak, ortadan kaldırmak, önlemek",
    "example": "The new system will obviate the need for manual record-keeping.",
    "turkishExample": "Yeni sistem manuel kayıt tutma ihtiyacını ortadan kaldıracaktır.",
    "suffix": "ate"
  },
  {
    "word": "Density",
    "type": "noun",
    "turkish": "Yoğunluk",
    "example": "The city has a high population density.",
    "turkishExample": "Şehir yüksek bir nüfus yoğunluğuna sahip.",
    "suffix": "ity"
  },
  {
    "word": "Clarify",
    "type": "verb",
    "turkish": "Açıklığa kavuşturmak, netleştirmek",
    "example": "Could you help clarify some points in the contract?",
    "turkishExample": "Sözleşmedeki bazı noktaları açıklığa kavuşturmaya yardımcı olabilir misiniz?",
    "suffix": "ify"
  },
  {
    "word": "Despair",
    "type": "verb",
    "turkish": "Umudunu kesmek, umutsuzluğa düşmek",
    "example": "Don't despair; we will find a solution eventually.",
    "turkishExample": "Umutsuzluğa kapılma; eninde sonunda bir çözüm bulacağız."
  },
  {
    "word": "Endow",
    "type": "verb",
    "turkish": "Bağışlamak, gelir sağlamak, (yetenek vb.) doğuştan gelmek",
    "example": "The school was endowed by a local businessman.",
    "turkishExample": "Okul yerel bir iş adamı tarafından finanse edildi (vakfedildi)."
  },
  {
    "word": "Expectancy",
    "type": "noun",
    "turkish": "Beklenti, umut",
    "example": "Life expectancy has increased significantly over the last century.",
    "turkishExample": "Yaşam beklentisi son yüzyılda önemli ölçüde arttı.",
    "suffix": "ancy"
  },
  {
    "word": "Bloom",
    "type": "verb",
    "turkish": "Çiçek açmak, canlanmak, gelişmek",
    "example": "The cherry trees are starting to bloom.",
    "turkishExample": "Kiraz ağaçları çiçek açmaya başlıyor."
  },
  {
    "word": "Admonish",
    "type": "verb",
    "turkish": "Uyarmak, ikaz etmek, azarlamak",
    "example": "The teacher admonished the students for being late.",
    "turkishExample": "Öğretmen öğrencileri geç kaldıkları için uyardı.",
    "suffix": "ish"
  },
  {
    "word": "Amnesty",
    "type": "noun",
    "turkish": "Genel af",
    "example": "The government granted an amnesty to all political prisoners.",
    "turkishExample": "Hükümet tüm siyasi mahkumlara genel af çıkardı.",
    "suffix": "sty"
  },
  {
    "word": "Abhor",
    "type": "verb",
    "turkish": "Nefret etmek, iğrenmek",
    "example": "I abhor violence in any form.",
    "turkishExample": "Şiddetin her türlüsünden nefret ederim."
  },
  {
    "word": "Abolish",
    "type": "verb",
    "turkish": "Yürürlükten kaldırmak, son vermek",
    "example": "Slavery was abolished in the United States in 1865.",
    "turkishExample": "Amerika Birleşik Devletleri'nde kölelik 1865 yılında kaldırıldı.",
    "suffix": "ish"
  },
  {
    "word": "Avert",
    "type": "verb",
    "turkish": "Önlemek, başka yöne çevirmek, gidermek",
    "example": "The pilot managed to avert a disaster.",
    "turkishExample": "Pilot bir felaketi önlemeyi başardı."
  },
  {
    "word": "Challenge",
    "type": "verb",
    "turkish": "Meydan okumak, zorlamak, itiraz etmek",
    "example": "Starting a new business is a big challenge.",
    "turkishExample": "Yeni bir iş kurmak büyük bir zorluktur (meydan okumadır)."
  },
  {
    "word": "Sewage",
    "type": "noun",
    "turkish": "Kanalizasyon, atık su",
    "example": "The city's sewage system needs upgrading.",
    "turkishExample": "Şehrin kanalizasyon sisteminin iyileştirilmesi gerekiyor.",
    "suffix": "age"
  },
  {
    "word": "Effect",
    "type": "noun",
    "turkish": "Etki, sonuç, tesir",
    "example": "The new law will have a major effect on the economy.",
    "turkishExample": "Yeni yasanın ekonomi üzerinde büyük bir etkisi olacak."
  },
  {
    "word": "Cultivate",
    "type": "verb",
    "turkish": "Ekip biçmek, geliştirmek, yetiştirmek",
    "example": "He tried to cultivate a more professional image.",
    "turkishExample": "Daha profesyonel bir imaj geliştirmeye çalıştı.",
    "suffix": "ate"
  },
  {
    "word": "Demolish",
    "type": "verb",
    "turkish": "Yıkmak, yerle bir etmek, tahrip etmek",
    "example": "The old factory was demolished to make way for a new shopping mall.",
    "turkishExample": "Eski fabrika, yeni bir alışveriş merkezine yer açmak için yıkıldı.",
    "suffix": "ish"
  },
  {
    "word": "Defy",
    "type": "verb",
    "turkish": "Karşı gelmek, meydan okumak, küçümsemek",
    "example": "The baby defied all the doctor's predictions and survived.",
    "turkishExample": "Bebek doktorun tüm tahminlerine meydan okudu ve hayatta kaldı."
  },
  {
    "word": "Object",
    "type": "verb",
    "turkish": "İtiraz etmek, karşı çıkmak",
    "example": "Many local residents object to the new building project.",
    "turkishExample": "Pek çok yerel sakin yeni bina projesine itiraz ediyor."
  },
  {
    "word": "Maintain",
    "type": "verb",
    "turkish": "Sürdürmek, devam ettirmek, bakımı yapmak, iddia etmek",
    "example": "It is important to maintain a healthy diet.",
    "turkishExample": "Sağlıklı bir diyeti sürdürmek önemlidir."
  },
  {
    "word": "Relief",
    "type": "noun",
    "turkish": "Rahatlama, ferahlama, yardım (insani)",
    "example": "It was such a relief to hear that everyone was safe.",
    "turkishExample": "Herkesin güvende olduğunu duymak büyük bir rahatlamaydı."
  },
  {
    "word": "Reinforce",
    "type": "verb",
    "turkish": "Güçlendirmek, takviye etmek, pekiştirmek",
    "example": "The government sent more troops to reinforce the border.",
    "turkishExample": "Hükümet sınırı güçlendirmek için daha fazla asker gönderdi."
  },
  {
    "word": "Launch",
    "type": "verb",
    "turkish": "Başlatmak, piyasaya sürmek, (füze vb.) fırlatmak",
    "example": "The company plans to launch a new product next month.",
    "turkishExample": "Şirket gelecek ay yeni bir ürünü piyasaya sürmeyi planlıyor."
  },
  {
    "word": "Imply",
    "type": "verb",
    "turkish": "İma etmek, demek istemek, gerektirmek",
    "example": "Are you implying that I'm lying?",
    "turkishExample": "Yalan söylediğimi mi ima ediyorsun?",
    "suffix": "ify"
  },
  {
    "word": "Succumb",
    "type": "verb",
    "turkish": "Yenik düşmek, boyun eğmek, ölmek",
    "example": "He finally succumbed to his injuries in the hospital.",
    "turkishExample": "Hastanede nihayet yaralarına yenik düştü (vefat etti)."
  },
  {
    "word": "Summit",
    "type": "noun",
    "turkish": "Zirve, tepe, doruk",
    "example": "The world leaders met for a summit in Geneva.",
    "turkishExample": "Dünya liderleri Cenevre'de bir zirve için bir araya geldi."
  },
  {
    "word": "Interval",
    "type": "noun",
    "turkish": "Aralık, ara, fasıla",
    "example": "There will be a short interval between the two acts of the play.",
    "turkishExample": "Oyunun iki perdesi arasında kısa bir ara verilecek.",
    "suffix": "al"
  },
  {
    "word": "Implement",
    "type": "verb",
    "turkish": "Uygulamak, yerine getirmek, yürürlüğe koymak",
    "example": "The new changes will be implemented from next week.",
    "turkishExample": "Yeni değişiklikler gelecek haftadan itibaren uygulanacak.",
    "suffix": "ent"
  },
  {
    "word": "Measure",
    "type": "noun",
    "turkish": "Önlem, tedbir, ölçü",
    "example": "The government is taking strict measures to combat crime.",
    "turkishExample": "Hükümet suçla mücadele etmek için sıkı önlemler alıyor."
  },
  {
    "word": "Decadence",
    "type": "noun",
    "turkish": "Çöküş, gerileme, yozlaşma",
    "example": "The fall of the empire was caused by moral decadence.",
    "turkishExample": "İmparatorluğun çöküşüne ahlaki yozlaşma neden oldu.",
    "suffix": "ence"
  },
  {
    "word": "Deserve",
    "type": "verb",
    "turkish": "Hak etmek, layık olmak",
    "example": "After all that hard work, you deserve a holiday.",
    "turkishExample": "Bunca sıkı çalışmadan sonra bir tatili hak ediyorsun."
  },
  {
    "word": "Explore",
    "type": "verb",
    "turkish": "Keşfetmek, araştırmak",
    "example": "They decided to explore the ancient ruins.",
    "turkishExample": "Antik kalıntıları keşfetmeye karar verdiler."
  },
  {
    "word": "Unify",
    "type": "verb",
    "turkish": "Birleştirmek, tek bir çatı altında toplamak",
    "example": "The new king managed to unify the divided tribes.",
    "turkishExample": "Yeni kral bölünmüş kabileleri birleştirmeyi başardı.",
    "suffix": "ify"
  },
  {
    "word": "Terrain",
    "type": "noun",
    "turkish": "Arazi, yer, bölge",
    "example": "The difficult terrain made it hard for the troops to advance.",
    "turkishExample": "Zorlu arazi birliklerin ilerlemesini güçleştirdi."
  },
  {
    "word": "Tenet",
    "type": "noun",
    "turkish": "İlke, öğreti, prensip",
    "example": "One of the basic tenets of democracy is freedom of speech.",
    "turkishExample": "Demokrasinin temel ilkelerinden biri ifade özgürlüğüdür."
  },
  {
    "word": "Accumulate",
    "type": "verb",
    "turkish": "Birikmek, toplamak, yığmak",
    "example": "Dust soon accumulates if you don't clean the room regularly.",
    "turkishExample": "Odayı düzenli olarak temizlemezseniz kısa sürede toz birikir.",
    "suffix": "ate"
  },
  {
    "word": "Cherish",
    "type": "verb",
    "turkish": "Beslemek, değer vermek, şefkatle bakmak",
    "example": "I will always cherish the memories of our childhood.",
    "turkishExample": "Çocukluk anılarımıza her zaman değer vereceğim.",
    "suffix": "ish"
  },
  {
    "word": "Assume",
    "type": "verb",
    "turkish": "Varsaymak, üstlenmek, farz etmek",
    "example": "I assume that you have already finished your homework.",
    "turkishExample": "Ödevini çoktan bitirdiğini varsayıyorum."
  },
  {
    "word": "Scrutinize",
    "type": "verb",
    "turkish": "Dikkatle incelemek, tetkik etmek",
    "example": "The police scrutinized the evidence for any clues.",
    "turkishExample": "Polis herhangi bir ipucu için kanıtları dikkatle inceledi.",
    "suffix": "ize"
  },
  {
    "word": "Sculpture",
    "type": "noun",
    "turkish": "Heykel, heykelcilik sanatı",
    "example": "The museum has a large collection of modern sculptures.",
    "turkishExample": "Müzenin geniş bir modern heykel koleksiyonu var."
  },
  {
    "word": "Revival",
    "type": "noun",
    "turkish": "Canlanma, yeniden canlandırma, uyanış",
    "example": "There has been a revival of interest in traditional folk music.",
    "turkishExample": "Geleneksel halk müziğine olan ilgide bir canlanma oldu.",
    "suffix": "al"
  },
  {
    "word": "Eject",
    "type": "verb",
    "turkish": "Dışarı atmak, çıkarmak, (uçakta) fırlatmak",
    "example": "The pilot was forced to eject from the burning aircraft.",
    "turkishExample": "Pilot yanan uçaktan fırlatmak (kendini dışarı atmak) zorunda kaldı."
  },
  {
    "word": "Elevate",
    "type": "verb",
    "turkish": "Yükseltmek, yukarısını çıkarmak, (mevki) yükseltmek",
    "example": "Exercise can help to elevate your mood.",
    "turkishExample": "Egzersiz yapmak ruh halinizi yükseltmeye yardımcı olabilir.",
    "suffix": "ate"
  },
  {
    "word": "Overlook",
    "type": "verb",
    "turkish": "Görmezden gelmek, tepeden bakmak, gözden kaçırmak",
    "example": "I'm willing to overlook your mistake this time.",
    "turkishExample": "Bu seferlik hatanı görmezden gelmeye hazırım."
  },
  {
    "word": "Induce",
    "type": "verb",
    "turkish": "Neden olmak, ikna etmek, tetiklemek",
    "example": "High levels of stress can induce heart problems.",
    "turkishExample": "Yüksek stres seviyeleri kalp sorunlarını tetikleyebilir."
  },
  {
    "word": "Posterity",
    "type": "noun",
    "turkish": "Gelecek nesiller, kuşaklar",
    "example": "His works have been preserved for posterity.",
    "turkishExample": "Eserleri gelecek nesiller için korunmuştur.",
    "suffix": "ity"
  },
  {
    "word": "Presume",
    "type": "verb",
    "turkish": "Varsaymak, farz etmek, tahmin etmek",
    "example": "I presume you're tired after such a long journey.",
    "turkishExample": "Böylesine uzun bir yolculuktan sonra yorgun olduğunuzu tahmin ediyorum."
  },
  {
    "word": "Property",
    "type": "noun",
    "turkish": "Emlak, mülk, özellik, nitelik",
    "example": "He owns a lot of property in the city center.",
    "turkishExample": "Şehir merkezinde pek çok mülkü var.",
    "suffix": "ty"
  },
  {
    "word": "Strata",
    "type": "noun",
    "turkish": "Katmanlar, tabakalar",
    "example": "The cliffs show several distinct strata of rock.",
    "turkishExample": "Kayalıklar birkaç farklı kaya katmanı gösteriyor."
  },
  {
    "word": "Innovation",
    "type": "noun",
    "turkish": "Yenilik, inovasyon",
    "example": "The company is famous for its technological innovation.",
    "turkishExample": "Şirket teknolojik yenilikleriyle tanınır.",
    "suffix": "tion"
  },
  {
    "word": "Impotence",
    "type": "noun",
    "turkish": "Güçsüzlük, acizlik",
    "example": "He felt a sense of impotence against the system.",
    "turkishExample": "Sisteme karşı bir acizlik hissi duydu.",
    "suffix": "ence"
  },
  {
    "word": "Reliability",
    "type": "noun",
    "turkish": "Güvenilirlik",
    "example": "The reliability of the data has been questioned.",
    "turkishExample": "Verilerin güvenilirliği sorgulandı.",
    "suffix": "ity"
  },
  {
    "word": "Retention",
    "type": "noun",
    "turkish": "Aklında tutma, muhafaza etme, (su vb.) tutma",
    "example": "The school has a very high student retention rate.",
    "turkishExample": "Okulun öğrenci tutma (devamlılık) oranı çok yüksek.",
    "suffix": "tion"
  },
  {
    "word": "Retaliate",
    "type": "verb",
    "turkish": "Misilleme yapmak, karşılık vermek",
    "example": "The troops retaliated against the enemy attack.",
    "turkishExample": "Birlikler düşman saldırısına misilleme yaptı.",
    "suffix": "ate"
  },
  {
    "word": "Efficiency",
    "type": "noun",
    "turkish": "Verimlilik, etkililik",
    "example": "The new manager is trying to increase the factory's efficiency.",
    "turkishExample": "Yeni müdür fabrikanın verimliliğini artırmaya çalışıyor.",
    "suffix": "ency"
  },
  {
    "word": "Discrepancy",
    "type": "noun",
    "turkish": "Tutarsızlık, farklılık, uyuşmazlık",
    "example": "There is a discrepancy between the two reports.",
    "turkishExample": "İki rapor arasında bir tutarsızlık var.",
    "suffix": "ancy"
  },
  {
    "word": "Expire",
    "type": "verb",
    "turkish": "Süresi dolmak, vadesi gelmek, ölmek",
    "example": "My passport will expire next month.",
    "turkishExample": "Pasaportumun süresi gelecek ay dolacak."
  },
  {
    "word": "Exhilarate",
    "type": "verb",
    "turkish": "Neşelendirmek, coşturmak",
    "example": "The cold mountain air exhilarated our spirits.",
    "turkishExample": "Soğuk dağ havası ruhumuzu coşturdu.",
    "suffix": "ate"
  },
  {
    "word": "Ruin",
    "type": "verb",
    "turkish": "Mahvetmek, yıkmak, bozmak",
    "example": "The heavy rain ruined our picnic.",
    "turkishExample": "Şiddetli yağmur pikniğimizi mahvetti."
  },
  {
    "word": "Appease",
    "type": "verb",
    "turkish": "Yatıştırmak, sakinleştirmek, taviz vermek",
    "example": "They tried to appease the angry crowd.",
    "turkishExample": "Öfkeli kalabalığı yatıştırmaya çalıştılar."
  },
  {
    "word": "Charity",
    "type": "noun",
    "turkish": "Hayır kurumu, sadaka, yardımseverlik",
    "example": "The money was given to a local charity.",
    "turkishExample": "Para yerel bir hayır kurumuna verildi.",
    "suffix": "ity"
  },
  {
    "word": "Allow",
    "type": "verb",
    "turkish": "İzin vermek, müsaade etmek",
    "example": "They don't allow smoking in this building.",
    "turkishExample": "Bu binada sigara içilmesine izin verilmiyor."
  },
  {
    "word": "Anguish",
    "type": "noun",
    "turkish": "Izdırap, keder, acı",
    "example": "She was in anguish after hearing the news.",
    "turkishExample": "Haberi duyduktan sonra büyük bir ızdırap içindeydi.",
    "suffix": "ish"
  },
  {
    "word": "Zenith",
    "type": "noun",
    "turkish": "Zirve, doruk noktası",
    "example": "The empire reached its zenith in the 12th century.",
    "turkishExample": "İmparatorluk 12. yüzyılda doruk noktasına ulaştı."
  },
  {
    "word": "Unification",
    "type": "noun",
    "turkish": "Birleşme, birleştirme",
    "example": "The unification of Germany took place in 1990.",
    "turkishExample": "Almanya'nın birleşmesi 1990 yılında gerçekleşti.",
    "suffix": "tion"
  },
  {
    "word": "Violate",
    "type": "verb",
    "turkish": "İhlal etmek, bozmak, çiğnemek",
    "example": "They were accused of violating international law.",
    "turkishExample": "Uluslararası hukuku ihlal etmekle suçlandılar.",
    "suffix": "ate"
  },
  {
    "word": "Famine",
    "type": "noun",
    "turkish": "Kıtlık, açlık",
    "example": "Millions of people died during the famine.",
    "turkishExample": "Kıtlık sırasında milyonlarca insan öldü.",
    "suffix": "ine"
  },
  {
    "word": "Deteriorate",
    "type": "verb",
    "turkish": "Kötüleşmek, fenaya gitmek, bozulmak",
    "example": "The patient's condition began to deteriorate rapidly.",
    "turkishExample": "Hastanın durumu hızla kötüleşmeye başladı.",
    "suffix": "ate"
  },
  {
    "word": "Rear",
    "type": "verb",
    "turkish": "Büyütmek, yetiştirmek, arka taraf",
    "example": "She reared three children on her own.",
    "turkishExample": "Kendi başına üç çocuk büyüttü."
  },
  {
    "word": "Repel",
    "type": "verb",
    "turkish": "Geri püskürtmek, itmek, tiksindirmek",
    "example": "The spray is designed to repel mosquitoes.",
    "turkishExample": "Sprey, sivrisinekleri kovmak (uzaklaştırmak) için tasarlandı."
  },
  {
    "word": "Obsess",
    "type": "verb",
    "turkish": "Aklına takılmak, takıntı yapmak",
    "example": "He is obsessed with his weight.",
    "turkishExample": "Kilosuna takıntılı."
  },
  {
    "word": "Indulge",
    "type": "verb",
    "turkish": "Boyun eğmek, şımartmak, tadını çıkarmak, kendini kaptırmak",
    "example": "They occasionally indulge in a luxury holiday.",
    "turkishExample": "Arada bir lüks bir tatil yaparak kendilerini şımartırlar."
  },
  {
    "word": "Inflict",
    "type": "verb",
    "turkish": "Vermek, uğratmak, (ceza vb.) çektirmek",
    "example": "The enemy inflicted heavy casualties on our troops.",
    "turkishExample": "Düşman birliklerimize ağır kayıplar verdirdi."
  },
  {
    "word": "Fraction",
    "type": "noun",
    "turkish": "Kesir, küçük parça, bölüm",
    "example": "The cost was only a fraction of the original price.",
    "turkishExample": "Maliyet, asıl fiyatın sadece küçük bir kısmıydı.",
    "suffix": "tion"
  },
  {
    "word": "Swindle",
    "type": "verb",
    "turkish": "Dolandırmak, kazıklamak",
    "example": "They swindled the elderly woman out of her savings.",
    "turkishExample": "Yaşlı kadını birikimlerini alarak dolandırdılar."
  },
  {
    "word": "Sweat",
    "type": "verb",
    "turkish": "Terlemek, çok çalışmak",
    "example": "He was sweating profusely after the long run.",
    "turkishExample": "Uzun koşudan sonra aşırı derecede terliyordu."
  },
  {
    "word": "Queue",
    "type": "noun",
    "turkish": "Kuyruk, sıra",
    "example": "There was a long queue outside the cinema.",
    "turkishExample": "Sinemanın önünde uzun bir kuyruk vardı."
  },
  {
    "word": "Justice",
    "type": "noun",
    "turkish": "Adalet, hak, hukuk",
    "example": "He spent his life fighting for social justice.",
    "turkishExample": "Hayatını toplumsal adalet için savaşarak geçirdi.",
    "suffix": "ice"
  },
  {
    "word": "Humiliate",
    "type": "verb",
    "turkish": "Aşağılamak, utandırmak, rezil etmek",
    "example": "The teacher tried to humiliate the student in front of the class.",
    "turkishExample": "Öğretmen öğrenciyi sınıfın önünde utandırmaya çalıştı.",
    "suffix": "ate"
  },
  {
    "word": "Recreation",
    "type": "noun",
    "turkish": "Eğlence, dinlenme, boş vakit değerlendirme",
    "example": "The park provides a variety of facilities for recreation.",
    "turkishExample": "Park, dinlenme ve eğlenme için çeşitli imkanlar sunuyor.",
    "suffix": "tion"
  },
  {
    "word": "Scope",
    "type": "noun",
    "turkish": "Kapsam, faaliyet alanı, fırsat",
    "example": "The new law is limited in its scope.",
    "turkishExample": "Yeni yasanın kapsamı sınırlıdır."
  },
  {
    "word": "Demonstrate",
    "type": "verb",
    "turkish": "Göstermek, kanıtlamak, gösteri yapmak",
    "example": "The research demonstrates the effectiveness of the new drug.",
    "turkishExample": "Araştırma, yeni ilacın etkililiğini kanıtlıyor.",
    "suffix": "ate"
  },
  {
    "word": "Delineate",
    "type": "verb",
    "turkish": "Taslak çizmek, betimlemek, sınırlarını belirlemek",
    "example": "The report clearly delineates the steps to be taken.",
    "turkishExample": "Rapor, atılacak adımları açıkça tanımlıyor.",
    "suffix": "ate"
  },
  {
    "word": "Commend",
    "type": "verb",
    "turkish": "Övmek, tavsiye etmek, emanet etmek",
    "example": "The judge commended the witness for her bravery.",
    "turkishExample": "Yargıç, tanığı cesaretinden dolayı övdü."
  },
  {
    "word": "Erupt",
    "type": "verb",
    "turkish": "Patlamak, püskürmek (yanardağ vb.), birden başlamak",
    "example": "The volcano erupted after being dormant for years.",
    "turkishExample": "Yanardağ yıllarca uykuda kaldıktan sonra püskürdü."
  },
  {
    "word": "Endure",
    "type": "verb",
    "turkish": "Dayanmak, katlanmak, sürmek",
    "example": "They had to endure many hardships during the winter.",
    "turkishExample": "Kış boyunca pek çok zorluğa katlanmak zorunda kaldılar."
  },
  {
    "word": "Appoint",
    "type": "verb",
    "turkish": "Atamak, tayin etmek, kararlaştırmak",
    "example": "He was appointed as the new CEO of the company.",
    "turkishExample": "Şirketin yeni CEO'su olarak atandı."
  },
  {
    "word": "Appreciate",
    "type": "verb",
    "turkish": "Takdir etmek, değerini bilmek, anlamak, (değeri) artmak",
    "example": "I really appreciate all the help you've given me.",
    "turkishExample": "Bana verdiğin tüm yardım için gerçekten minnettarım.",
    "suffix": "ate"
  },
  {
    "word": "Triumph",
    "type": "noun",
    "turkish": "Zafer, büyük başarı",
    "example": "The victory was a major triumph for the team.",
    "turkishExample": "Galibiyet takım için büyük bir zaferdi."
  },
  {
    "word": "Rule",
    "type": "verb",
    "turkish": "Yönetmek, hüküm sürmek, karar vermek",
    "example": "The king ruled the country for over forty years.",
    "turkishExample": "Kral ülkeyi kırk yıldan fazla yönetti."
  },
  {
    "word": "Expedition",
    "type": "noun",
    "turkish": "Gezisi, keşif gezisi, sefer",
    "example": "They went on an expedition to the Amazon rainforest.",
    "turkishExample": "Amazon yağmur ormanlarına bir keşif gezisine çıktılar.",
    "suffix": "tion"
  },
  {
    "word": "Embody",
    "type": "verb",
    "turkish": "Somutlaştırmak, simgelemek, dahil etmek",
    "example": "She embodies everything that a good teacher should be.",
    "turkishExample": "O, iyi bir öğretmenin olması gereken her şeyi simgeliyor.",
    "suffix": "ify"
  },
  {
    "word": "Conquer",
    "type": "verb",
    "turkish": "Fethetmek, yenmek, galip gelmek",
    "example": "The army set out to conquer new territories.",
    "turkishExample": "Ordu yeni topraklar fethetmek için yola çıktı.",
    "suffix": "er"
  },
  {
    "word": "Consent",
    "type": "noun",
    "turkish": "Rıza, onay, izin",
    "example": "He took the car without his father's consent.",
    "turkishExample": "Arabayı babasının rızası olmadan aldı.",
    "suffix": "ent"
  },
  {
    "word": "Recession",
    "type": "noun",
    "turkish": "Durgunluk, gerileme (ekonomik)",
    "example": "Many small businesses went bankrupt during the recession.",
    "turkishExample": "Pek çok küçük işletme ekonomik durgunluk sırasında iflas etti.",
    "suffix": "sion"
  },
  {
    "word": "Resent",
    "type": "verb",
    "turkish": "İçerlemek, darılmak, kızmak",
    "example": "She resents the fact that she has to work on weekends.",
    "turkishExample": "Hafta sonları çalışmak zorunda olmasına içerliyor."
  },
  {
    "word": "Impress",
    "type": "verb",
    "turkish": "Etkilemek, hayran bırakmak, üzerine basmak",
    "example": "I was very impressed by her performance.",
    "turkishExample": "Performansından çok etkilendim."
  },
  {
    "word": "Furnish",
    "type": "verb",
    "turkish": "Döşemek, donatmak, sağlamak",
    "example": "They have just finished furnishing their new apartment.",
    "turkishExample": "Yeni dairelerini döşemeyi henüz bitirdiler.",
    "suffix": "ish"
  },
  {
    "word": "Rank",
    "type": "noun",
    "turkish": "Rütbe, sıra, kademe, derece",
    "example": "He rose through the ranks to become a general.",
    "turkishExample": "Rütbeleri tırmanarak general oldu."
  },
  {
    "word": "Prompt",
    "type": "verb",
    "turkish": "Teşvik etmek, harekete geçirmek, neden olmak",
    "example": "The news prompted him to change his plans.",
    "turkishExample": "Haberler planlarını değiştirmesine neden oldu."
  },
  {
    "word": "Prove",
    "type": "verb",
    "turkish": "Kanıtlamak, ispatlamak, olduğu ortaya çıkmak",
    "example": "The suspect managed to prove his innocence.",
    "turkishExample": "Şüpheli masumiyetini kanıtlamayı başardı."
  },
  {
    "word": "Qualify",
    "type": "verb",
    "turkish": "Nitelendirmek, hak kazanmak, kalifiye olmak",
    "example": "He worked hard to qualify as a doctor.",
    "turkishExample": "Doktor olmak (hak kazanmak) için çok çalıştı.",
    "suffix": "ify"
  },
  {
    "word": "Sustain",
    "type": "verb",
    "turkish": "Sürdürmek, devam ettirmek, ayakta tutmak, (yaralanmak vb.)",
    "example": "She sustained serious injuries in the car accident.",
    "turkishExample": "Araba kazasında ciddi şekilde yaralandı."
  },
  {
    "word": "Account",
    "type": "verb",
    "turkish": "Açıklamak, hesap vermek, sorumlu tutmak",
    "example": "The teacher asked the student to account for his absence.",
    "turkishExample": "Öğretmen öğrenciden devamsızlığını açıklamasını istedi."
  },
  {
    "word": "Prerequisite",
    "type": "noun",
    "turkish": "Ön koşul, ön şart",
    "example": "A university degree is a prerequisite for this job.",
    "turkishExample": "Bu iş için üniversite mezuniyeti bir ön koşuldur."
  },
  {
    "word": "Grief",
    "type": "noun",
    "turkish": "Keder, acı, üzüntü",
    "example": "She was overwhelmed by grief after the death of her cat.",
    "turkishExample": "Kedisinin ölümünden sonra derin bir keder içindeydi."
  },
  {
    "word": "Obey",
    "type": "verb",
    "turkish": "İtaat etmek, söz dinlemek, uymak",
    "example": "Soldiers are trained to obey orders without question.",
    "turkishExample": "Askerler emirlere sorgusuz sualsiz itaat etmek üzere eğitilirler."
  },
  {
    "word": "Evidence",
    "type": "noun",
    "turkish": "Kanıt, delil",
    "example": "There is clear evidence that the climate is changing.",
    "turkishExample": "İklimin değiştiğine dair açık kanıtlar var.",
    "suffix": "ence"
  },
  {
    "word": "Wealth",
    "type": "noun",
    "turkish": "Servet, zenginlik, varlık",
    "example": "He used his wealth to help the poor and the needy.",
    "turkishExample": "Servetini fakirlere ve muhtaçlara yardım etmek için kullandı."
  },
  {
    "word": "Torture",
    "type": "verb",
    "turkish": "İşkence etmek, eziyet etmek",
    "example": "He was tortured during his time in prison.",
    "turkishExample": "Hapishanede kaldığı süre boyunca işkence gördü.",
    "suffix": "ure"
  },
  {
    "word": "Utility",
    "type": "noun",
    "turkish": "Yarar, fayda, kamu hizmeti (gaz, elektrik vb.)",
    "example": "The new software is designed for extra utility.",
    "turkishExample": "Yeni yazılım ek fayda sağlamak üzere tasarlandı.",
    "suffix": "ity"
  },
  {
    "word": "Vibrate",
    "type": "verb",
    "turkish": "Titreşmek, titretmek",
    "example": "The floor began to vibrate as the heavy train passed by.",
    "turkishExample": "Ağır tren geçerken zemin titreşmeye başladı.",
    "suffix": "ate"
  },
  {
    "word": "Terminate",
    "type": "verb",
    "turkish": "Sonlandırmak, bitirmek, sona ermek",
    "example": "The contract was terminated by mutual agreement.",
    "turkishExample": "Sözleşme karşılıklı anlaşma ile sonlandırıldı.",
    "suffix": "ate"
  },
  {
    "word": "Warrant",
    "type": "verb",
    "turkish": "Garanti etmek, haklı çıkarmak, yetki vermek",
    "example": "The situation is serious enough to warrant further investigation.",
    "turkishExample": "Durum, daha fazla soruşturmayı haklı çıkaracak kadar ciddi."
  },
  {
    "word": "Shrink",
    "type": "verb",
    "turkish": "Küçülmek, daralmak, çekilmek",
    "example": "The company's market share has shrunk significantly.",
    "turkishExample": "Şirketin pazar payı önemli ölçüde küçüldü."
  },
  {
    "word": "Bias",
    "type": "noun",
    "turkish": "Önyargı, taraflılık, eğilim",
    "example": "There is a clear bias against women in some professions.",
    "turkishExample": "Bazı mesleklerde kadınlara karşı açık bir önyargı var."
  },
  {
    "word": "Alter",
    "type": "verb",
    "turkish": "Değiştirmek, başkalaştırmak",
    "example": "The tailor had to alter the jacket to fit him better.",
    "turkishExample": "Terzi, ceketini ona daha iyi uyması için değiştirmek zorunda kaldı."
  },
  {
    "word": "Essence",
    "type": "noun",
    "turkish": "Öz, esas, ruh, esans",
    "example": "The essence of his argument was that we need more funding.",
    "turkishExample": "Argümanının özü daha fazla fona ihtiyacımız olduğuydu.",
    "suffix": "ence"
  },
  {
    "word": "Drawback",
    "type": "noun",
    "turkish": "Dezavantaj, kusur, sakınca",
    "example": "One of the drawbacks of living in the city is the traffic.",
    "turkishExample": "Şehirde yaşamanın dezavantajlarından biri trafik."
  },
  {
    "word": "Commit",
    "type": "verb",
    "turkish": "Suç işlemek, kendini adamak, söz vermek",
    "example": "He committed a series of thefts across the city.",
    "turkishExample": "Şehir genelinde bir dizi hırsızlık yaptı."
  },
  {
    "word": "Cure",
    "type": "verb",
    "turkish": "İyileştirmek, şifa bulmak, tedavi etmek",
    "example": "Doctors are still searching for a cure for cancer.",
    "turkishExample": "Doktorlar hala kanser için bir tedavi arıyorlar."
  },
  {
    "word": "Outnumber",
    "type": "verb",
    "turkish": "Sayıca üstün olmak, sayıca geçmek",
    "example": "In this school, girls outnumber boys by two to one.",
    "turkishExample": "Bu okulda kızların sayısı erkeklerin sayısının iki katı."
  },
  {
    "word": "Retard",
    "type": "verb",
    "turkish": "Geciktirmek, yavaşlatmak, engellemek",
    "example": "The lack of sun can retard the growth of the plants.",
    "turkishExample": "Güneş eksikliği bitkilerin büyümesini yavaşlatabilir."
  },
  {
    "word": "Heritage",
    "type": "noun",
    "turkish": "Miras, kalıtım",
    "example": "We must protect our national heritage for future generations.",
    "turkishExample": "Milli mirasımızı gelecek nesiller için korumalıyız.",
    "suffix": "age"
  },
  {
    "word": "Spin",
    "type": "verb",
    "turkish": "Dönmek, döndürmek, (ip) eğirmek",
    "example": "The earth takes 24 hours to spin on its axis.",
    "turkishExample": "Dünyanın kendi ekseni etrafında dönmesi 24 saat sürer."
  },
  {
    "word": "Quota",
    "type": "noun",
    "turkish": "Kota, kontenjan, hisse",
    "example": "The government has imposed a quota on the number of immigrants.",
    "turkishExample": "Hükümet göçmen sayısına kota koydu."
  },
  {
    "word": "Indict",
    "type": "verb",
    "turkish": "Suçlamak, dava açmak, itham etmek",
    "example": "He was indicted for fraud.",
    "turkishExample": "Dolandırıcılıktan dava edildi (itham edildi)."
  },
  {
    "word": "Reassure",
    "type": "verb",
    "turkish": "İçini rahatlatmak, yeniden güven vermek",
    "example": "The doctor tried to reassure the worried parents.",
    "turkishExample": "Doktor endişeli ebeveynlerin içini rahatlatmaya çalıştı."
  },
  {
    "word": "Persevere",
    "type": "verb",
    "turkish": "Azmetmek, direnmek, yılmamak",
    "example": "She persevered despite all the obstacles in her path.",
    "turkishExample": "Yolundaki tüm engellere rağmen azmetti (yılmadı).",
    "suffix": "ere"
  },
  {
    "word": "Precipitation",
    "type": "noun",
    "turkish": "Yağış, çökelme, hız",
    "example": "The weather forecast predicts heavy precipitation for tomorrow.",
    "turkishExample": "Hava durumu tahmini yarın için şiddetli yağış öngörüyor.",
    "suffix": "tion"
  },
  {
    "word": "Liability",
    "type": "noun",
    "turkish": "Sorumluluk, yükümlülük, borç, engel",
    "example": "Personal liability is a major concern for small business owners.",
    "turkishExample": "Kişisel sorumluluk, küçük işletme sahipleri için büyük bir endişe kaynağıdır.",
    "suffix": "ity"
  },
  {
    "word": "Decline",
    "type": "verb",
    "turkish": "Reddetmek, azalmak, gerilemek",
    "example": "He declined the invitation to the party.",
    "turkishExample": "Parti davetini reddetti."
  },
  {
    "word": "Consensus",
    "type": "noun",
    "turkish": "Fikir birliği, mutabakat",
    "example": "The committee reached a consensus after several hours of debate.",
    "turkishExample": "Komite, birkaç saatlik tartışmanın ardından fikir birliğine vardı.",
    "suffix": "sus"
  },
  {
    "word": "Confront",
    "type": "verb",
    "turkish": "Yüzleşmek, karşı karşıya gelmek",
    "example": "We need to confront the problem immediately.",
    "turkishExample": "Sorunla derhal yüzleşmemiz gerekiyor."
  },
  {
    "word": "Determine",
    "type": "verb",
    "turkish": "Belirlemek, saptamak, kararlaştırmak",
    "example": "The test will help determine the cause of the illness.",
    "turkishExample": "Test, hastalığın nedenini belirlemeye yardımcı olacak."
  },
  {
    "word": "Ensure",
    "type": "verb",
    "turkish": "Garantiye almak, emin olmak, sağlamak",
    "example": "Please ensure that all the windows are closed before you leave.",
    "turkishExample": "Lütfen çıkmadan önce tüm pencerelerin kapalı olduğundan emin olun."
  },
  {
    "word": "Abate",
    "type": "verb",
    "turkish": "Azalmak, dindirmek, hafifletmek",
    "example": "The storm finally began to abate after midnight.",
    "turkishExample": "Fırtına gece yarısından sonra nihayet dinmeye başladı.",
    "suffix": "ate"
  },
  {
    "word": "Bargain",
    "type": "verb",
    "turkish": "Pazarlık etmek, kelepir eşya, anlaşma",
    "example": "She is good at bargaining for lower prices.",
    "turkishExample": "Düşük fiyatlar için pazarlık yapmakta iyidir."
  },
  {
    "word": "Soar",
    "type": "verb",
    "turkish": "Hızla yükselmek, artmak, süzülmek",
    "example": "Food prices have soared over the last few months.",
    "turkishExample": "Gıda fiyatları son birkaç ayda fırladı."
  },
  {
    "word": "Burden",
    "type": "noun",
    "turkish": "Yük, külfet, sorumluluk",
    "example": "The high taxes are a heavy burden for many families.",
    "turkishExample": "Yüksek vergiler pek çok aile için ağır bir yüktür.",
    "suffix": "en"
  },
  {
    "word": "Assert",
    "type": "verb",
    "turkish": "İleri sürmek, iddia etmek, savunmak",
    "example": "He continued to assert his innocence throughout the trial.",
    "turkishExample": "Duruşma boyunca masumiyetini iddia etmeye devam etti."
  },
  {
    "word": "Emphasize",
    "type": "verb",
    "turkish": "Vurgulamak, önemini belirtmek",
    "example": "The report emphasizes the need for more scientific research.",
    "turkishExample": "Rapor, daha fazla bilimsel araştırma yapılması gerektiğini vurguluyor.",
    "suffix": "ize"
  },
  {
    "word": "Facilitate",
    "type": "verb",
    "turkish": "Kolaylaştırmak",
    "example": "The new software is designed to facilitate the translation process.",
    "turkishExample": "Yeni yazılım, çeviri sürecini kolaylaştırmak için tasarlanmıştır.",
    "suffix": "ate"
  },
  {
    "word": "Descend",
    "type": "verb",
    "turkish": "İnmek, alçalmak, soyundan gelmek",
    "example": "The path descends steeply to the river.",
    "turkishExample": "Yol nehre doğru dik bir şekilde iniyor.",
    "suffix": "end"
  },
  {
    "word": "Layer",
    "type": "noun",
    "turkish": "Tabaka, katman",
    "example": "The cake has several layers of chocolate and cream.",
    "turkishExample": "Pastanın birkaç kat çikolata ve kreması var.",
    "suffix": "er"
  },
  {
    "word": "Perspire",
    "type": "verb",
    "turkish": "Terlemek",
    "example": "He began to perspire heavily under the hot sun.",
    "turkishExample": "Sıcak güneşin altında aşırı derecede terlemeye başladı."
  },
  {
    "word": "Portray",
    "type": "verb",
    "turkish": "Betimlemek, tasvir etmek, canlandırmak",
    "example": "The book portrays life in a small village during the war.",
    "turkishExample": "Kitap, savaş sırasında küçük bir köydeki hayatı tasvir ediyor."
  },
  {
    "word": "Pervade",
    "type": "verb",
    "turkish": "Yayılmak, içine işlemek, kaplamak",
    "example": "The smell of fresh coffee pervaded the entire house.",
    "turkishExample": "Taze kahve kokusu tüm evi kapladı."
  },
  {
    "word": "Suspend",
    "type": "verb",
    "turkish": "Askıya almak, durdurmak, asmak",
    "example": "The athlete was suspended for using illegal drugs.",
    "turkishExample": "Sporcu, yasaklı madde kullandığı için cezalı (askıya alındı) duruma düştü.",
    "suffix": "end"
  },
  {
    "word": "Species",
    "type": "noun",
    "turkish": "Tür, cins",
    "example": "There are thousands of different species of butterflies in the world.",
    "turkishExample": "Dünyada binlerce farklı kelebek türü vardır.",
    "suffix": "ies"
  },
  {
    "word": "Stun",
    "type": "verb",
    "turkish": "Sersemletmek, şoka uğratmak, büyülemek",
    "example": "Everyone was stunned by the sudden news of his resignation.",
    "turkishExample": "Onun ani istifa haberiyle herkes şoka uğradı."
  },
  {
    "word": "Strive",
    "type": "verb",
    "turkish": "Çabalamak, gayret etmek, yarışmak",
    "example": "We must strive to achieve our goals despite the difficulties.",
    "turkishExample": "Zorluklara rağmen hedeflerimize ulaşmak için çabalamalıyız."
  },
  {
    "word": "Startle",
    "type": "verb",
    "turkish": "Ürkütmek, korkutmak, şaşırtmak",
    "example": "The loud noise startled the baby.",
    "turkishExample": "Yüksek gürültü bebeği ürküttü."
  },
  {
    "word": "Kidnap",
    "type": "verb",
    "turkish": "Adam kaçırmak, kaçırmak",
    "example": "The businessman's daughter was kidnapped for ransom.",
    "turkishExample": "İş adamının kızı fidye için kaçırıldı."
  },
  {
    "word": "Knack",
    "type": "noun",
    "turkish": "Yetenek, beceri, ustalık",
    "example": "She has a real knack for making people feel comfortable.",
    "turkishExample": "İnsanları rahat ettirme konusunda gerçek bir yeteneği var."
  },
  {
    "word": "Irrigate",
    "type": "verb",
    "turkish": "Sulamak",
    "example": "The dry fields were irrigated using water from the river.",
    "turkishExample": "Kuru tarlalar nehirden gelen suyla sulandı.",
    "suffix": "ate"
  },
  {
    "word": "Flourish",
    "type": "verb",
    "turkish": "Gelişmek, serpilmek, başarılı olmak",
    "example": "Art and literature flourished during the Renaissance.",
    "turkishExample": "Rönesans döneminde sanat ve edebiyat gelişti.",
    "suffix": "ish"
  },
  {
    "word": "Rehearsal",
    "type": "noun",
    "turkish": "Prova, tekrarlama",
    "example": "They are having their final rehearsal before the concert tonight.",
    "turkishExample": "Bu akşamki konserden önce son provalarını yapıyorlar.",
    "suffix": "al"
  },
  {
    "word": "Persecute",
    "type": "verb",
    "turkish": "Zulmetmek, eziyet etmek, peşini bırakmamak",
    "example": "The minority group was persecuted for their religious beliefs.",
    "turkishExample": "Azınlık grup, dini inançları nedeniyle zulme uğradı."
  },
  {
    "word": "Notion",
    "type": "noun",
    "turkish": "Düşünce, kavram, fikir",
    "example": "She has a strange notion that everyone is against her.",
    "turkishExample": "Herkesin ona karşı olduğuna dair garip bir düşüncesi var.",
    "suffix": "ion"
  },
  {
    "word": "Denounce",
    "type": "verb",
    "turkish": "Kınamak, ihbar etmek, suçlamak",
    "example": "The government denounced the use of violence.",
    "turkishExample": "Hükümet şiddet kullanılmasını kınadı."
  },
  {
    "word": "Collapse",
    "type": "verb",
    "turkish": "Çökmek, yıkılmak, bayılmak",
    "example": "The old building collapsed during the earthquake.",
    "turkishExample": "Eski bina deprem sırasında çöktü."
  },
  {
    "word": "Escalate",
    "type": "verb",
    "turkish": "Tırmanmak, yükselmek, şiddetlenmek",
    "example": "The conflict between the two countries began to escalate.",
    "turkishExample": "İki ülke arasındaki çatışma tırmanmaya başladı.",
    "suffix": "ate"
  },
  {
    "word": "Sack",
    "type": "verb",
    "turkish": "İşten kovmak, yağmalamak, çuvala koymak",
    "example": "He was sacked from his job for being late too often.",
    "turkishExample": "Sık sık geç kaldığı için işinden kovuldu."
  },
  {
    "word": "Plummet",
    "type": "verb",
    "turkish": "Dikine düşmek, hızla azalmak",
    "example": "Share prices plummeted after the bad news was announced.",
    "turkishExample": "Kötü haber açıklandıktan sonra hisse senedi fiyatları çakıldı."
  },
  {
    "word": "Substitution",
    "type": "noun",
    "turkish": "Yerine koyma, yedekleme, ikame",
    "example": "The manager decided to make a substitution in the second half of the game.",
    "turkishExample": "Menajer, oyunun ikinci yarısında oyuncu değişikliği (ikame) yapmaya karar verdi.",
    "suffix": "tion"
  },
  {
    "word": "Necessity",
    "type": "noun",
    "turkish": "Gereklilik, zorunluluk, ihtiyaç",
    "example": "Food and water are basic necessities of life.",
    "turkishExample": "Yiyecek ve su, yaşamın temel gereklilikleridir.",
    "suffix": "ity"
  },
  {
    "word": "Pretend",
    "type": "verb",
    "turkish": "Gibi yapmak, numara yapmak, iddia etmek",
    "example": "He pretended to be asleep when his mother entered the room.",
    "turkishExample": "Annesi odaya girdiğinde uyuyormuş gibi yaptı.",
    "suffix": "end"
  },
  {
    "word": "Expenditure",
    "type": "noun",
    "turkish": "Harcama, masraf, gider",
    "example": "New equipment accounts for a large part of the company's expenditure.",
    "turkishExample": "Yeni ekipmanlar şirketin harcamalarının büyük bir kısmını oluşturuyor.",
    "suffix": "ure"
  },
  {
    "word": "Diversity",
    "type": "noun",
    "turkish": "Çeşitlilik, farklılık",
    "example": "The city is famous for its cultural diversity.",
    "turkishExample": "Şehir kültürel çeşitliliğiyle tanınır.",
    "suffix": "ity"
  },
  {
    "word": "Prevent",
    "type": "verb",
    "turkish": "Önlemek, engel olmak",
    "example": "Vaccination is an effective way to prevent diseases.",
    "turkishExample": "Aşılanma, hastalıkları önlemenin etkili bir yoludur.",
    "suffix": "ent"
  },
  {
    "word": "Tendency",
    "type": "noun",
    "turkish": "Eğilim, meyillilik",
    "example": "Prices have a tendency to rise during the summer months.",
    "turkishExample": "Fiyatların yaz aylarında yükselme eğilimi vardır.",
    "suffix": "ency"
  },
  {
    "word": "Weaken",
    "type": "verb",
    "turkish": "Zayıflatmak, güçten düşürmek",
    "example": "The illness has weakened his heart.",
    "turkishExample": "Hastalık kalbini zayıflattı.",
    "suffix": "en"
  },
  {
    "word": "Postpone",
    "type": "verb",
    "turkish": "Ertelemek, sonraya bırakmak",
    "example": "The meeting was postponed until next week.",
    "turkishExample": "Toplantı gelecek haftaya kadar ertelendi."
  },
  {
    "word": "Access",
    "type": "noun",
    "turkish": "Erişim, ulaşım, giriş",
    "example": "They have access to the library's online database.",
    "turkishExample": "Kütüphanenin çevrimiçi veri tabanına erişimleri var.",
    "suffix": "ess"
  },
  {
    "word": "Insight",
    "type": "noun",
    "turkish": "Anlayış, kavrayış, içgörü",
    "example": "The report provides a deep insight into the causes of the crisis.",
    "turkishExample": "Rapor, krizin nedenlerine dair derin bir içgörü sunuyor."
  },
  {
    "word": "Extract",
    "type": "verb",
    "turkish": "Çıkarmak, özetini çıkarmak, çekmek",
    "example": "The dentist had to extract two of his teeth.",
    "turkishExample": "Diş hekimi onun iki dişini çekmek zorunda kaldı.",
    "suffix": "act"
  },
  {
    "word": "Undergo",
    "type": "verb",
    "turkish": "Maruz kalmak, geçirmek, başına gelmek",
    "example": "The company is undergoing a major restructuring.",
    "turkishExample": "Şirket büyük bir yeniden yapılanma sürecinden geçiyor."
  },
  {
    "word": "Regulate",
    "type": "verb",
    "turkish": "Düzenlemek, disiplin altına almak",
    "example": "The government needs to regulate the banking industry more effectively.",
    "turkishExample": "Hükümetin bankacılık sektörünü daha etkili bir şekilde düzenlemesi gerekiyor.",
    "suffix": "ate"
  },
  {
    "word": "Task",
    "type": "noun",
    "turkish": "Görev, iş, ödev",
    "example": "He was given the difficult task of organizing the conference.",
    "turkishExample": "Konferansı organize etme gibi zor bir görev kendisine verildi."
  },
  {
    "word": "Investment",
    "type": "noun",
    "turkish": "Yatırım",
    "example": "The company decided to increase its investment in renewable energy.",
    "turkishExample": "Şirket, yenilenebilir enerjiye olan yatırımını artırmaya karar verdi.",
    "suffix": "ment"
  },
  {
    "word": "Owe",
    "type": "verb",
    "turkish": "Borçlu olmak, minnettar olmak",
    "example": "I owe you a drink for all your help.",
    "turkishExample": "Tüm yardımların için sana bir içecek borçluyum."
  },
  {
    "word": "Component",
    "type": "noun",
    "turkish": "Bileşen, parça, öğe",
    "example": "Trust is a vital component of any successful relationship.",
    "turkishExample": "Güven, her başarılı ilişkinin hayati bir bileşenidir.",
    "suffix": "ent"
  },
  {
    "word": "Incorporate",
    "type": "verb",
    "turkish": "Dahil etmek, birleştirmek, bünyesine katmak",
    "example": "The new manager plans to incorporate more feedback from the staff.",
    "turkishExample": "Yeni müdür, personelden daha fazla geri bildirim almayı (dahil etmeyi) planlıyor.",
    "suffix": "ate"
  },
  {
    "word": "Reinstate",
    "type": "verb",
    "turkish": "Eski görevine iade etmek, yeniden yürürlüğe koymak",
    "example": "The government decided to reinstate the old laws.",
    "turkishExample": "Hükümet eski yasaları yeniden yürürlüğe koymaya karar verdi.",
    "suffix": "ate"
  },
  {
    "word": "Trifling",
    "type": "adjective",
    "turkish": "Önemsiz, ufak tefek, değersiz",
    "example": "Don't waste your time on such trifling matters.",
    "turkishExample": "Zamanınızı böyle önemsiz meselelerle harcamayın."
  },
  {
    "word": "Abundant",
    "type": "adjective",
    "turkish": "Bol, bereketli, çok",
    "example": "The area is famous for its abundant wildlife.",
    "turkishExample": "Bölge, bol yaban hayatıyla ünlüdür."
  },
  {
    "word": "Grateful",
    "type": "adjective",
    "turkish": "Minnettar, müteşekkir",
    "example": "I am extremely grateful for all your help.",
    "turkishExample": "Tüm yardımınız için son derece minnettarım."
  },
  {
    "word": "Imperative",
    "type": "adjective",
    "turkish": "Zorunlu, mecburi, çok önemli",
    "example": "It is imperative that these changes are implemented immediately.",
    "turkishExample": "bu değişikliklerin derhal uygulanması zorunludur."
  },
  {
    "word": "Dreadful",
    "type": "adjective",
    "turkish": "Korkunç, berbat, dehşet verici",
    "example": "The weather was absolutely dreadful during our holiday.",
    "turkishExample": "Tatilimiz boyunca hava kesinlikle berbattı."
  },
  {
    "word": "Flawless",
    "type": "adjective",
    "turkish": "Kusursuz, hatasız",
    "example": "She gave a flawless performance on the piano.",
    "turkishExample": "Piyanoda kusursuz bir performans sergiledi."
  },
  {
    "word": "Hostile",
    "type": "adjective",
    "turkish": "Düşmanca, saldırgan, elverişsiz",
    "example": "The desert is a hostile environment for most plants.",
    "turkishExample": "Çöl, çoğu bitki için elverişsiz (düşman) bir ortamdır."
  },
  {
    "word": "Inevitable",
    "type": "adjective",
    "turkish": "Kaçınılmaz, beklenen",
    "example": "Change is an inevitable part of life.",
    "turkishExample": "Değişim, hayatın kaçınılmaz bir parçasıdır."
  },
  {
    "word": "Keen",
    "type": "adjective",
    "turkish": "Keskin, hevesli, düşkün",
    "example": "He is a keen student of history.",
    "turkishExample": "O, hevesli bir tarih öğrencisidir."
  },
  {
    "word": "Mandatory",
    "type": "adjective",
    "turkish": "Zorunlu, mecburi",
    "example": "Wearing seatbelts is mandatory in most countries.",
    "turkishExample": "Çoğu ülkede emniyet kemeri takmak zorunludur."
  },
  {
    "word": "Negligible",
    "type": "adjective",
    "turkish": "İhmal edilebilir, önemsiz",
    "example": "The cost of the repairs was negligible.",
    "turkishExample": "Onarım maliyeti ihmal edilebilir düzeydeydi."
  },
  {
    "word": "Obscure",
    "type": "adjective",
    "turkish": "Belirsiz, anlaşılması güç, tanınmamış",
    "example": "The origin of the tradition remains obscure.",
    "turkishExample": "Geleneğin kökeni belirsizliğini koruyor."
  },
  {
    "word": "Precise",
    "type": "adjective",
    "turkish": "Kesin, tam, titiz",
    "example": "We need precise measurements for the construction.",
    "turkishExample": "İnşaat için kesin ölçümlere ihtiyacımız var."
  },
  {
    "word": "Quaint",
    "type": "adjective",
    "turkish": "Antika görünümlü, değişik ve çekici, eski moda",
    "example": "They stayed in a quaint little cottage in the mountains.",
    "turkishExample": "Dağlarda şirin ve eski moda küçük bir kulübede kaldılar."
  },
  {
    "word": "Reluctant",
    "type": "adjective",
    "turkish": "İsteksiz, gönülsüz",
    "example": "She was reluctant to lend him the money.",
    "turkishExample": "Ona borç para verme konusunda isteksizdi."
  },
  {
    "word": "Sovereign",
    "type": "noun",
    "turkish": "Hükümdar, egemen güç, bağımsız devlet",
    "example": "The nation is a sovereign state.",
    "turnishExample": "Ulus, bağımsız (egemen) bir devlettir."
  },
  {
    "word": "Tangled",
    "type": "adjective",
    "turkish": "Dolaşmış, karış karış, karmaşık",
    "example": "She spent hours trying to comb out her tangled hair.",
    "turkishExample": "Dolaşmış saçlarını tarayarak açmak için saatlerini harcadı."
  },
  {
    "word": "Unanimous",
    "type": "adjective",
    "turkish": "Oy birliğiyle seçilen, hemfikir",
    "example": "The decision was unanimous.",
    "turkishExample": "Karar oy birliğiyle alındı."
  },
  {
    "word": "Vague",
    "type": "adjective",
    "turkish": "Belirsiz, net olmayan, hayal meyal",
    "example": "I only have a vague memory of the incident.",
    "turkishExample": "Olayla ilgili sadece hayal meyal bir hatıram var."
  },
  {
    "word": "Wary",
    "type": "adjective",
    "turkish": "Tedbirli, uyanık, sakınan",
    "example": "Be wary of strangers offering gifts.",
    "turkishExample": "Hediye teklif eden yabancılara karşı tedbirli olun."
  },
  {
    "word": "Yearn",
    "type": "verb",
    "turkish": "Çok istemek, hasret çekmek, özlemek",
    "example": "She yearned to return to her homeland.",
    "turkishExample": "Vatanına dönmeyi çok istiyordu (hasretini çekiyordu)."
  },
  {
    "word": "Zealous",
    "type": "adjective",
    "turkish": "Hevesli, gayretli, ateşli",
    "example": "He is a zealous supporter of environmental causes.",
    "turkishExample": "Çevresel amaçların ateşli bir destekçisidir."
  },
  {
    "word": "Appalling",
    "type": "adjective",
    "turkish": "Korkunç, dehşet verici, çok kötü",
    "example": "The conditions in the prison were appalling.",
    "turkishExample": "Hapishanedeki koşullar dehşet vericiydi."
  },
  {
    "word": "Benevolent",
    "type": "adjective",
    "turkish": "Hayırsever, iyiliksever",
    "example": "The charity was supported by a benevolent donor.",
    "turkishExample": "Hayır kurumu, hayırsever bir bağışçı tarafından desteklendi."
  },
  {
    "word": "Candor",
    "type": "noun",
    "turkish": "Açık sözlülük, samimiyet, dürüstlük",
    "example": "I appreciate your candor in this matter.",
    "turkishExample": "Bu meseledeki açık sözlülüğünü takdir ediyorum."
  },
  {
    "word": "Devoid",
    "type": "adjective",
    "turkish": "-den yoksun, mahrum",
    "example": "The room was completely devoid of furniture.",
    "turkishExample": "Oda tamamen mobilyadan yoksundu."
  },
  {
    "word": "Eloquent",
    "type": "adjective",
    "turkish": "Güzel ve etkili konuşan, anlamlı",
    "example": "He made an eloquent speech at the wedding.",
    "turkishExample": "Düğünde etkileyici bir konuşma yaptı."
  },
  {
    "word": "Frugal",
    "type": "adjective",
    "turkish": "Tutumlu, idareli",
    "example": "He has a frugal lifestyle despite his wealth.",
    "turkishExample": "Zenginliğine rağmen tutumlu bir yaşam tarzı var."
  },
  {
    "word": "Gullible",
    "type": "adjective",
    "turkish": "Saf, kolay aldatılan",
    "example": "They sell expensive products to gullible tourists.",
    "turkishExample": "Saf turistlere pahalı ürünler satıyorlar."
  },
  {
    "word": "Humble",
    "type": "adjective",
    "turkish": "Alçakgönüllü, mütevazı",
    "example": "He is a humble man despite his great success.",
    "turkishExample": "Büyük başarısına rağmen mütevazı bir adamdır."
  },
  {
    "word": "Implicit",
    "type": "adjective",
    "turkish": "Dolaylı, üstü kapalı, tam, kesin",
    "example": "Trust is implicit in our friendship.",
    "turkishExample": "Dostluğumuzda güven tamdır (üstü kapalı mevcuttur)."
  },
  {
    "word": "Jovial",
    "type": "adjective",
    "turkish": "Neşeli, şen, keyifli",
    "example": "He was in a jovial mood after the party.",
    "turkishExample": "Partiden sonra neşeli bir ruh halindeydi."
  },
  {
    "word": "Kinetic",
    "type": "adjective",
    "turkish": "Hareketli, kinetik",
    "example": "Moving objects have kinetic energy.",
    "turkishExample": "Hareket eden nesneler kinetik enerjiye sahiptir."
  },
  {
    "word": "Lucrative",
    "type": "adjective",
    "turkish": "Kazançlı, karlı",
    "example": "The company has a lucrative contract with the government.",
    "turkishExample": "Şirketin hükümetle karlı bir sözleşmesi var."
  },
  {
    "word": "Meticulous",
    "type": "adjective",
    "turkish": "Titiz, kılı kırk yaran",
    "example": "She is very meticulous about her work.",
    "turkishExample": "İşi konusunda çok titizdir."
  },
  {
    "word": "Novel",
    "type": "adjective",
    "turkish": "Yeni, alışılmamış, orijinal",
    "example": "The architect came up with a novel design for the building.",
    "turkishExample": "Mimar bina için alışılmamış bir tasarım geliştirdi."
  },
  {
    "word": "Ominous",
    "type": "adjective",
    "turkish": "Uğursuz, tehdit edici, kaygı verici",
    "example": "The dark clouds were an ominous sign of a storm.",
    "turkishExample": "Koyu bulutlar fırtınanın uğursuz (tehdit edici) bir belirtisiydi."
  },
  {
    "word": "Pensive",
    "type": "adjective",
    "turkish": "Düşünceli, dalgın, mahzun",
    "example": "She looked pensive as she stared out the window.",
    "turkishExample": "Pencereden dışarı bakarken düşünceli görünüyordu."
  },
  {
    "word": "Quick-witted",
    "type": "adjective",
    "turkish": "Hazırcevap, zeki",
    "example": "A quick-witted person can always find a solution.",
    "turkishExample": "Zeki (hazırcevap) bir insan her zaman bir çözüm bulabilir."
  },
  {
    "word": "Resilient",
    "type": "adjective",
    "turkish": "Dayanıklı, çabuk toparlanan, esnek",
    "example": "Children are remarkably resilient to life's setbacks.",
    "turkishExample": "Çocuklar hayatın aksiliklerine karşı olağanüstü derecede dayanıklıdır."
  },
  {
    "word": "Serene",
    "type": "adjective",
    "turkish": "Huzurlu, sakin, dingin",
    "example": "The lake looked beautiful and serene in the morning light.",
    "turkishExample": "Göl, sabah ışığında güzel ve huzurlu görünüyordu."
  },
  {
    "word": "Timid",
    "type": "adjective",
    "turkish": "Ürkek, çekingen, utangaç",
    "example": "He's too timid to ask her for a date.",
    "turkishExample": "Ona randevu teklif edemeyecek kadar çekingen."
  },
  {
    "word": "Ubiquitous",
    "type": "adjective",
    "turkish": "Her yerde bulunan, yaygın",
    "example": "The mobile phone has become ubiquitous in our daily lives.",
    "turkishExample": "Cep telefonu günlük hayatımızda her yerde bulunan bir hale geldi."
  },
  {
    "word": "Vibrant",
    "type": "adjective",
    "turkish": "Canlı, hareketli, titreyen",
    "example": "The city is famous for its vibrant nightlife.",
    "turkishExample": "Şehir, canlı gece hayatıyla ünlüdür."
  },
  {
    "word": "Witty",
    "type": "adjective",
    "turkish": "Nüktedan, zeki ve komik",
    "example": "He is known for his witty remarks.",
    "turkishExample": "Nüktedan açıklamalarıyla tanınır."
  },
  {
    "word": "Zen",
    "type": "adjective",
    "turkish": "Sakin, huzurlu, zihnen rahat",
    "example": "She tried to stay zen during the stressful meeting.",
    "turkishExample": "Stresli toplantı sırasında sakin kalmaya çalıştı."
  },
  {
    "word": "Consecutive",
    "type": "adjective",
    "turkish": "Ardışık, birbirini izleyen",
    "example": "It rained for three consecutive days.",
    "turkishExample": "Üç gün üst üste (ardışık) yağmur yağdı."
  },
  {
    "word": "Accordingly",
    "type": "adverb",
    "turkish": "Buna göre, sonuç olarak, uygun şekilde",
    "example": "Please inform us of your decision and we will act accordingly.",
    "turkishExample": "Lütfen bize kararınızı bildirin; biz de buna göre hareket edeceğiz."
  },
  {
    "word": "Secular",
    "type": "adjective",
    "turkish": "Laik, dünyevi",
    "example": "The country has a secular education system.",
    "turkishExample": "Ülkenin laik bir eğitim sistemi var."
  },
  {
    "word": "Devout",
    "type": "adjective",
    "turkish": "Dindar, samimi, içten",
    "example": "The family were devout Catholics.",
    "turkishExample": "Aile dindar Katoliklerdi."
  },
  {
    "word": "Exacerbate",
    "type": "verb",
    "turkish": "Kötüleştirmek, şiddetlendirmek",
    "example": "The bad news exacerbated the already tense situation.",
    "turkishExample": "Kötü haber zaten gergin olan durumu daha da kötüleştirdi."
  },
  {
    "word": "Prudent",
    "type": "adjective",
    "turkish": "İhtiyatlı, sağduyulu",
    "example": "It would be prudent to save some money for the future.",
    "turkishExample": "Gelecek için biraz para biriktirmek ihtiyatlı (sağduyulu) olacaktır."
  },
  {
    "word": "Viable",
    "type": "adjective",
    "turkish": "Uygulanabilir, ayakta kalabilir, yaşayabilir",
    "example": "The committee is looking for a viable solution to the problem.",
    "turkishExample": "Komite sorun için uygulanabilir bir çözüm arıyor."
  },
  {
    "word": "Versatile",
    "type": "adjective",
    "turkish": "Çok yönlü, elinden her iş gelen",
    "example": "He is a versatile actor who can play many different roles.",
    "turkishExample": "Pek çok farklı rolü oynayabilen çok yönlü bir aktördür."
  },
  {
    "word": "Trigger",
    "type": "verb",
    "turkish": "Tetiklemek, neden olmak",
    "example": "The protest triggered a major political crisis.",
    "turkishExample": "Protesto büyük bir siyasi krizi tetikledi."
  },
  {
    "word": "Tangible",
    "type": "adjective",
    "turkish": "Somut, elle tutulur, hissedilir",
    "example": "The research has produced no tangible results so far.",
    "turkishExample": "Araştırma şu ana kadar somut bir sonuç üretmedi."
  },
  {
    "word": "Scarcity",
    "type": "noun",
    "turkish": "Kıtlık, azlık",
    "example": "The scarcity of resources is a major problem in many countries.",
    "turkishExample": "Kaynakların kıtlığı pek çok ülkede büyük bir sorundur."
  },
  {
    "word": "Refined",
    "type": "adjective",
    "turkish": "Arıtılmış, nazik, kibar, rafine",
    "example": "His manners were refined and elegant.",
    "turkishExample": "Tavırları nazik ve zarifti."
  },
  {
    "word": "Plausible",
    "type": "adjective",
    "turkish": "Mantıklı, makul, akla yatkın",
    "example": "His explanation sounds plausible, but I'm still not sure.",
    "turkishExample": "Açıklaması mantıklı geliyor ama hala emin değilim."
  },
  {
    "word": "Oblivious",
    "type": "adjective",
    "turkish": "Habersiz, farkında olmayan",
    "example": "He was completely oblivious to what was happening around him.",
    "turkishExample": "Çevresinde olup bitenlerden tamamen habersizdi."
  },
  {
    "word": "Lethal",
    "type": "adjective",
    "turkish": "Öldürücü, ölümcül",
    "example": "The poison is lethal even in very small amounts.",
    "turkishExample": "Zehir çok küçük miktarlarda bile öldürücüdür."
  },
  {
    "word": "Genuine",
    "type": "adjective",
    "turkish": "Gerçek, hakiki, içten",
    "example": "Is that a genuine diamond?",
    "turkishExample": "O gerçek (hakiki) bir elmas mı?"
  },
  {
    "word": "Fragile",
    "type": "adjective",
    "turkish": "Hassas, kırılgan",
    "example": "The box is full of fragile items.",
    "turkishExample": "Kutu kırılgan (hassas) eşyalarla dolu."
  },
  {
    "word": "Deter",
    "type": "verb",
    "turkish": "Caydırmak, vazgeçirmek",
    "example": "The security cameras are designed to deter criminals.",
    "turkishExample": "Güvenlik kameraları suçluları caydırmak için tasarlanmıştır."
  },
  {
    "word": "Collaborate",
    "type": "verb",
    "turkish": "İş birliği yapmak",
    "example": "The two companies decided to collaborate on the project.",
    "turkishExample": "İki şirket projede iş birliği yapmaya karar verdi."
  },
  {
    "word": "Authentic",
    "type": "adjective",
    "turkish": "Otantik, gerçek, güvenilir",
    "example": "This is an authentic painting by Picasso.",
    "turkishExample": "Bu, Picasso'nun orijinal (otantik) bir tablosudur."
  },
  {
    "word": "Ambiguous",
    "type": "adjective",
    "turkish": "Belirsiz, iki anlamlı",
    "example": "The wording of the agreement is ambiguous.",
    "turkishExample": "Anlaşmanın dili belirsiz (karmaşık)."
  },
  {
    "word": "Widespread",
    "type": "adjective",
    "turkish": "Yaygın, geniş çaplı",
    "example": "There is widespread concern about the environmental crisis.",
    "turkishExample": "Çevre kriziyle ilgili yaygın bir endişe var."
  },
  {
    "word": "Substantial",
    "type": "adjective",
    "turkish": "Önemli, büyük, varlıklı",
    "example": "The project will require a substantial amount of money.",
    "turkishExample": "Proje önemli (büyük) miktarda para gerektirecek."
  },
  {
    "word": "Peculiar",
    "type": "adjective",
    "turkish": "Tuhaf, garip, kendine özgü",
    "example": "The smell in the room was very peculiar.",
    "turkishExample": "Odadaki koku çok tuhaftı (garipti)."
  },
  {
    "word": "Nominal",
    "type": "adjective",
    "turkish": "Sembolik, ismen mevcut olan, çok küçük",
    "example": "The company charged a nominal fee for the service.",
    "turkishExample": "Şirket hizmet için sembolik (nominal) bir ücret talep etti."
  },
  {
    "word": "Mediate",
    "type": "verb",
    "turkish": "Arabuluculuk yapmak",
    "example": "The UN tried to mediate between the two sides.",
    "turkishExample": "BM her iki taraf arasında arabuluculuk yapmaya çalıştı."
  },
  {
    "word": "Lament",
    "type": "verb",
    "turkish": "Yas tutmak, kederlenmek, pişmanlığını dile getirmek",
    "example": "Many people lament the loss of traditional culture.",
    "turkishExample": "Pek çok insan geleneksel kültürün kaybından dolayı kederleniyor."
  },
  {
    "word": "Inherent",
    "type": "adjective",
    "turkish": "Doğasında olan, doğuştan gelen",
    "example": "There are inherent risks in any business venture.",
    "turkishExample": "Herhangi bir ticari girişimde doğasında olan (kaçınılmaz) riskler vardır."
  },
  {
    "word": "Greed",
    "type": "noun",
    "turkish": "Açgözlülük, hırs",
    "example": "The financial crisis was caused by corporate greed.",
    "turkishExample": "Mali krize şirketlerin açgözlülüğü neden oldu."
  },
  {
    "word": "Fluid",
    "type": "adjective",
    "turkish": "Sıvı, akışkan, değişken",
    "example": "The political situation is still very fluid.",
    "turkishExample": "Siyasi durum hala çok değişken (akışkan)."
  },
  {
    "word": "Compatible",
    "type": "adjective",
    "turkish": "Uyumlu, bağdaşan",
    "example": "These Two systems are not compatible with each other.",
    "turkishExample": "Bu iki sistem birbiriyle uyumlu değil."
  },
  {
    "word": "Implausible",
    "type": "adjective",
    "turkish": "İnanılmaz, mantıksız, akla yatkın olmayan",
    "example": "The explanation sounds completely implausible to me.",
    "turkishExample": "Açıklama bana tamamen mantıksız geliyor."
  },
  {
    "word": "Legitimate",
    "type": "adjective",
    "turkish": "Meşru, yasal",
    "example": "Every person has a legitimate right to education.",
    "turkishExample": "Her insanın meşru bir eğitim hakkı vardır."
  },
  {
    "word": "Nervous",
    "type": "adjective",
    "turkish": "Sinirli, gergin, heyecanlı",
    "example": "She felt very nervous before the interview.",
    "turkishExample": "Mülakattan önce çok gergin hissetti."
  },
  {
    "word": "Persistent",
    "type": "adjective",
    "turkish": "Kalıcı, ısrarcı, sürekli",
    "example": "He's been suffering from a persistent cough for weeks.",
    "turkishExample": "Haftalardır bitmek bilmeyen (kalıcı) bir öksürükten şikayetçi."
  },
  {
    "word": "Rigid",
    "type": "adjective",
    "turkish": "Sert, katı, esnemez",
    "example": "The rules are very rigid and cannot be changed easily.",
    "turkishExample": "Kurallar çok katıdır ve kolayca değiştirilemez."
  },
  {
    "word": "Skeptical",
    "type": "adjective",
    "turkish": "Şüpheci, kuşkucu",
    "example": "Many experts are skeptical about the results of the research.",
    "turkishExample": "Pek çok uzman araştırmanın sonuçları konusunda şüpheci."
  },
  {
    "word": "Tremendous",
    "type": "adjective",
    "turkish": "Muazzam, devasa, çok büyük",
    "example": "The project was a tremendous success.",
    "turkishExample": "Proje muazzam bir başarıydı."
  },
  {
    "word": "Uphold",
    "type": "verb",
    "turkish": "Onaylamak, desteklemek, savunmak (karar, yasa vb.)",
    "example": "The court upheld the decision of the lower court.",
    "turkishExample": "Mahkeme, alt mahkemenin kararını onadı."
  },
  {
    "word": "Vulnerable",
    "type": "adjective",
    "turkish": "Hassas, savunmasız, zayıf",
    "example": "Elderly people are particularly vulnerable to the flu.",
    "turkishExample": "Yaşlılar gribe karşı özellikle savunmasızdırlar."
  },
  {
    "word": "Abstain",
    "type": "verb",
    "turkish": "Kaçınmak, feragat etmek, (oylamada) çekimser kalmak",
    "example": "He decided to abstain from voting.",
    "turkishExample": "Oy kullanırken çekimser kalmaya karar verdi."
  },
  {
    "word": "Compliment",
    "type": "noun",
    "turkish": "Iltifat, övgü",
    "example": "He paid her a nice compliment about her dress.",
    "turkishExample": "Elbisesi hakkında ona güzel bir iltifatta bulundu."
  },
  {
    "word": "Detrimental",
    "type": "adjective",
    "turkish": "Zararlı, hasar verici",
    "example": "Smoking is detrimental to your health.",
    "turkishExample": "Sigara içmek sağlığınıza zararlıdır."
  },
  {
    "word": "Emphasis",
    "type": "noun",
    "turkish": "Vurgu, önem",
    "example": "The course places a strong emphasis on practical skills.",
    "turkishExample": "Kurs, pratik becerilere güçlü bir vurgu yapmaktadır."
  },
  {
    "word": "Flaw",
    "type": "noun",
    "turkish": "Kusur, hata, çatlak",
    "example": "The diamond has a small flaw in it.",
    "turkishExample": "Elmasın içinde küçük bir kusur var."
  },
  {
    "word": "Grim",
    "type": "adjective",
    "turkish": "Zalim, korkunç, asık suratlı, ümitsiz",
    "example": "The future looks grim if we don't act now.",
    "turkishExample": "Şimdi harekete geçmezsek gelecek karanlık (ümitsiz) görünüyor."
  },
  {
    "word": "Hypothesis",
    "type": "noun",
    "turkish": "Hipotez, varsayım",
    "example": "The scientists are testing a new hypothesis.",
    "turkishExample": "Bilim insanları yeni bir hipotezi test ediyorlar."
  },
  {
    "word": "Likely",
    "type": "adjective",
    "turkish": "Olası, muhtemel",
    "example": "It is likely that the prices will rise again.",
    "turkishExample": "Fiyatların tekrar yükselmesi muhtemeldir."
  },
  {
    "word": "Neglect",
    "type": "verb",
    "turkish": "İhmal etmek, bakmamak",
    "example": "The building has been neglected for years.",
    "turkishExample": "Bina yıllardır ihmal edildi."
  },
  {
    "word": "Overall",
    "type": "adjective",
    "turkish": "Toplam, genel, kapsamlı",
    "example": "The overall cost of the project was $1 million.",
    "turkishExample": "Projenin toplam maliyeti 1 milyon dolardı."
  },
  {
    "word": "Passive",
    "type": "adjective",
    "turkish": "Pasif, edilgen, eylemsiz",
    "example": "She played a passive role in the meeting.",
    "turkishExample": "Toplantıda pasif bir rol oynadı."
  },
  {
    "word": "Recover",
    "type": "verb",
    "turkish": "İyileşmek, geri kazanmak",
    "example": "She is still recovering from her surgery.",
    "turkishExample": "Hala ameliyatının etkisinden kurtuluyor (iyileşiyor)."
  },
  {
    "word": "Stagnant",
    "type": "adjective",
    "turkish": "Durgun, hareketsiz, kirli ve durgun (su vb.)",
    "example": "The economy has remained stagnant for over a year.",
    "turkishExample": "Ekonomi bir yılı aşkın süredir durgun seyrediyor."
  },
  {
    "word": "Ultimate",
    "type": "adjective",
    "turkish": "Nihai, son, temel",
    "example": "The ultimate goal is to achieve peace.",
    "turkishExample": "Nihai hedef barışı sağlamaktır."
  },
  {
    "word": "Value",
    "type": "noun",
    "turkish": "Değer, kıymet",
    "example": "The house has increased in value significantly.",
    "turkishExample": "Evin değeri önemli ölçüde arttı."
  },
  {
    "word": "Fruitful",
    "type": "adjective",
    "turkish": "Verimli, bereketli, karlı",
    "example": "The meeting was very fruitful.",
    "turkishExample": "Toplantı çok verimli geçti."
  },
  {
    "word": "Joint",
    "type": "adjective",
    "turkish": "Ortak, birleşik",
    "example": "They made a joint statement to the press.",
    "turkishExample": "Basına ortak bir açıklama yaptılar."
  },
  {
    "word": "Kinship",
    "type": "noun",
    "turkish": "Akrabalık, benzerlik",
    "example": "There is a strong sense of kinship between the two communities.",
    "turkishExample": "İki topluluk arasında güçlü bir benzerlik (akrabalık) hissi var."
  },
  {
    "word": "Lenient",
    "type": "adjective",
    "turkish": "Yumuşak, hoşgörülü, merhametli",
    "example": "The judge was very lenient with the young offender.",
    "turkishExample": "Yargıç genç suçluya karşı çok hoşgörülü davrandı."
  },
  {
    "word": "Noisy",
    "type": "adjective",
    "turkish": "Gürültülü",
    "example": "The neighbors are always so noisy.",
    "turkishExample": "Komşular her zaman çok gürültülü."
  },
  {
    "word": "Oblige",
    "type": "verb",
    "turkish": "Zorunda bırakmak, minnettar bırakmak, yardım etmek",
    "example": "We were obliged to wait for another hour.",
    "turkishExample": "Bir saat daha beklemek zorunda bırakıldık."
  },
  {
    "word": "Quote",
    "type": "verb",
    "turkish": "Alıntı yapmak, fiyat teklif etmek",
    "example": "He quoted a sentence from the book.",
    "turkishExample": "Kitaptan bir cümle alıntıladı."
  },
  {
    "word": "Scorn",
    "type": "verb",
    "turkish": "Küçümsemek, hor görmek",
    "example": "She scorned his offer of help.",
    "turkishExample": "Onun yardım teklifini küçümsedi (hor gördü)."
  },
  {
    "word": "Urge",
    "type": "verb",
    "turkish": "Zorlamak, ısrarla tavsiye etmek, teşvik etmek",
    "example": "I urge you to reconsider your decision.",
    "turkishExample": "Kararınızı tekrar gözden geçirmenizi önemle tavsiye ediyorum."
  },
  {
    "word": "Abstract",
    "type": "adjective",
    "turkish": "Soyut",
    "example": "Happiness is an abstract concept.",
    "turkishExample": "Mutluluk soyut bir kavramdır."
  },
  {
    "word": "Adept",
    "type": "adjective",
    "turkish": "Becerikli, mahir, usta",
    "example": "He is very adept at solving complex problems.",
    "turkishExample": "Karmaşık problemleri çözmede çok beceriklidir."
  },
  {
    "word": "Analogous",
    "type": "adjective",
    "turkish": "Benzer, örnek teşkil eden",
    "example": "The wings of a bird are analogous to the fins of a fish.",
    "turkishExample": "Bir kuşun kanatları, bir balığın yüzgeçlerine benzerdir."
  },
  {
    "word": "Arbitrary",
    "type": "adjective",
    "turkish": "Keyfi, rastgele",
    "example": "The choice of participants was completely arbitrary.",
    "turkishExample": "Katılımcıların seçimi tamamen keyfiydi."
  },
  {
    "word": "Ascertain",
    "type": "verb",
    "turkish": "Saptamak, belirlemek, aslını öğrenmek",
    "example": "We need to ascertain the cause of the fire.",
    "turkishExample": "Yangının nedenini saptamamız gerekiyor."
  },
  {
    "word": "Assimilate",
    "type": "verb",
    "turkish": "Özümsemek, benimsemek, sindirmek",
    "example": "New immigrants often find it hard to assimilate into the local culture.",
    "turkishExample": "Yeni göçmenler genellikle yerel kültürü özümsemekte zorlanırlar."
  },
  {
    "word": "Austerity",
    "type": "noun",
    "turkish": "Kemer sıkma, sertlik, sadelik",
    "example": "The government introduced austerity measures to reduce the deficit.",
    "turkishExample": "Hükümet açığı kapatmak için kemer sıkma (tasarruf) önlemleri getirdi."
  },
  {
    "word": "Banal",
    "type": "adjective",
    "turkish": "Banal, sıradan, yozlaşmış",
    "example": "The plot of the movie was very banal.",
    "turkishExample": "Filmin konusu çok banaldi (sıradandı)."
  },
  {
    "word": "Barrage",
    "type": "noun",
    "turkish": "Baraj, yaylım ateşi, yoğun saldırı",
    "example": "The speaker was faced with a barrage of questions.",
    "turkishExample": "Konuşmacı soru yağmuruyla (barajıyla) karşılaştı."
  },
  {
    "word": "Belligerent",
    "type": "adjective",
    "turkish": "Savaşçı, kavgacı, saldırgan",
    "example": "He has a very belligerent attitude.",
    "turkishExample": "Çok kavgacı (saldırgan) bir tavrı var."
  },
  {
    "word": "Blatant",
    "type": "adjective",
    "turkish": "Bariz, apaçık, arsızca",
    "example": "It was a blatant lie.",
    "turkishExample": "Apaçık bir yalandı."
  },
  {
    "word": "Capricious",
    "type": "adjective",
    "turkish": "Değişken, maymun iştahlı, fevri",
    "example": "The weather in the mountains is very capricious.",
    "turkishExample": "Dağlardaki hava çok değişkendir (fevridir)."
  },
  {
    "word": "Castigate",
    "type": "verb",
    "turkish": "Azarlamak, şiddetle eleştirmek, cezalandırmak",
    "example": "The manager castigated the employees for their mistakes.",
    "turkishExample": "Müdür, hatalarından dolayı çalışanları şiddetle eleştirdi."
  },
  {
    "word": "Coherent",
    "type": "adjective",
    "turkish": "Tutarlı, uyumlu, anlaşılır",
    "example": "He failed to give a coherent explanation for his behavior.",
    "turkishExample": "Davranışı için tutarlı bir açıklama yapamadı."
  },
  {
    "word": "Compelling",
    "type": "adjective",
    "turkish": "Zorlayıcı, ikna edici, merak uyandıran",
    "example": "There is no compelling evidence to support his theory.",
    "turkishExample": "Teorisini destekleyecek ikna edici (zorlayıcı) bir kanıt yok."
  },
  {
    "word": "Complacent",
    "type": "adjective",
    "turkish": "Halinden memnun, kayıtsız, gevşek",
    "example": "We cannot afford to be complacent about safety.",
    "turkishExample": "Güvenlik konusunda kayıtsız (gevşek) kalma lüksümüz yok."
  },
  {
    "word": "Concise",
    "type": "adjective",
    "turkish": "Kısa ve öz, az ve öz",
    "example": "His report was very concise and easy to read.",
    "turkishExample": "Raporu çok kısa ve öz ve okunması kolaydı."
  },
  {
    "word": "Condone",
    "type": "verb",
    "turkish": "Görmezden gelmek, affetmek, müsamaha göstermek",
    "example": "The school does not condone violence of any kind.",
    "turkishExample": "Okul her türlü şiddeti görmezden gelmez (asla müsamaha göstermez)."
  },
  {
    "word": "Conspicuous",
    "type": "adjective",
    "turkish": "Göz önünde, bariz, dikkat çekici",
    "example": "The bird has a conspicuous red mark on its head.",
    "turkishExample": "Kuşun başında dikkat çekici kırmızı bir işaret var."
  },
  {
    "word": "Credible",
    "type": "adjective",
    "turkish": "İnanılır, güvenilir",
    "example": "The witness provided a credible account of the accident.",
    "turkishExample": "Tanık, kaza hakkında güvenilir (inanılır) bir anlatım sundu."
  },
  {
    "word": "Culpable",
    "type": "adjective",
    "turkish": "Suçlu, kusurlu, kabahatli",
    "example": "The company was found culpable for the environmental damage.",
    "turkishExample": "Şirket çevresel zarardan dolayı suçlu bulundu."
  },
  {
    "word": "Cursory",
    "type": "adjective",
    "turkish": "Üstünkörü, alelacele",
    "example": "He took a cursory glance at the documents.",
    "turkishExample": "Belgelere üstünkörü bir göz attı."
  },
  {
    "word": "Daunting",
    "type": "adjective",
    "turkish": "Göz korkutucu, yıldırıcı",
    "example": "Starting a new job can be a daunting experience.",
    "turkishExample": "Yeni bir işe başlamak göz korkutucu bir deneyim olabilir."
  },
  {
    "word": "Debilitate",
    "type": "verb",
    "turkish": "Güçsüzleştirmek, zayıflatmak",
    "example": "The illness has debilitated him significantly.",
    "turkishExample": "Hastalık onu önemli ölçüde güçsüzleştirdi."
  },
  {
    "word": "Deficit",
    "type": "noun",
    "turkish": "Açık (bütçe, puan vb.), eksiklik",
    "example": "The trade deficit reached a record high last month.",
    "turkishExample": "Ticaret açığı geçen ay rekor seviyeye ulaştı."
  },
  {
    "word": "Deliberate",
    "type": "adjective",
    "turkish": "Kasti, mahsus, ölçülü, yavaş",
    "example": "It was a deliberate attempt to mislead us.",
    "turkishExample": "Bizi yanıltmaya yönelik kasti bir girişimdi."
  },
  {
    "word": "Demeanor",
    "type": "noun",
    "turkish": "Tavır, davranış, hal ve hareket",
    "example": "He has a very calm and professional demeanor.",
    "turkishExample": "Çok sakin ve profesyonel bir tavrı var."
  },
  {
    "word": "Demure",
    "type": "adjective",
    "turkish": "Ciddi, ağırbaşlı, utangaç",
    "example": "She was wearing a demure dress for the occasion.",
    "turkishExample": "Durum için ağırbaşlı (sade) bir elbise giyiyordu."
  },
  {
    "word": "Deride",
    "type": "verb",
    "turkish": "Alay etmek, küçümsemek",
    "example": "The critics derided its old-fashioned style.",
    "turkishExample": "Eleştirmenler onun eski moda tarzıyla alay ettiler."
  },
  {
    "word": "Desolate",
    "type": "adjective",
    "turkish": "Issız, terkedilmiş, kederli",
    "example": "The landscape was desolate and empty.",
    "turkishExample": "Manzara ıssız ve boştu."
  },
  {
    "word": "Despondent",
    "type": "adjective",
    "turkish": "Umutsuz, kederli, meyus",
    "example": "He felt despondent after failing the test again.",
    "turkishExample": "Testte tekrar başarısız olduktan sonra umutsuz hissetti."
  },
  {
    "word": "Devious",
    "type": "adjective",
    "turkish": "Sinsi, dolambaçlı, hilekâr",
    "example": "He uses devious methods to get what he wants.",
    "turkishExample": "İstediğini elde etmek için sinsi yöntemler kullanır."
  },
  {
    "word": "Diffident",
    "type": "adjective",
    "turkish": "Çekingen, kendine güvensiz",
    "example": "The diffident student rarely spoke in class.",
    "turkishExample": "Çekingen öğrenci sınıfta nadiren konuşurdu."
  },
  {
    "word": "Digress",
    "type": "verb",
    "turkish": "Konu dışına çıkmak, sapmak",
    "example": "Stop digressing and get back to the point.",
    "turkishExample": "Konuyu dağıtmayı bırak ve sadede gel."
  },
  {
    "word": "Diligent",
    "type": "adjective",
    "turkish": "Gayretli, hamarat, çalışkan",
    "example": "He is a very diligent worker.",
    "turkishExample": "Çok çalışkan (gayretli) bir işçidir."
  },
  {
    "word": "Disparage",
    "type": "verb",
    "turkish": "Küçümsemek, değersizleştirmek, yermek",
    "example": "You shouldn't disparage his efforts.",
    "turkishExample": "Onun çabalarını küçümsememelisin."
  },
  {
    "word": "Disparate",
    "type": "adjective",
    "turkish": "Farklı, tamamen değişik",
    "example": "The committee is made up of people from disparate backgrounds.",
    "turkishExample": "Komite, tamamen farklı geçmişlere sahip insanlardan oluşmaktadır."
  },
  {
    "word": "Disseminate",
    "type": "verb",
    "turkish": "Yaymak, dağıtmak (bilgi, haber vb.)",
    "example": "The organization works to disseminate information about the disease.",
    "turkishExample": "Kuruluş, hastalık hakkında bilgi yaymak için çalışıyor."
  },
  {
    "word": "Dissonance",
    "type": "noun",
    "turkish": "Uyumsuzluk, ahenksizlik, fikir ayrılığı",
    "example": "There is a cognitive dissonance in his argument.",
    "turkishExample": "Argümanında bilişsel bir uyumsuzluk var."
  },
  {
    "word": "Distinct",
    "type": "adjective",
    "turkish": "Farklı, belirgin, kendine has",
    "example": "The Two languages are quite distinct from each other.",
    "turkishExample": "İki dil birbirinden oldukça farklıdır."
  },
  {
    "word": "Divergent",
    "type": "adjective",
    "turkish": "Farklılaşan, sapan, bambaşka",
    "example": "The Two friends took divergent paths in life.",
    "turkishExample": "İki arkadaş hayatta farklılaşan (ayrı) yollar izlediler."
  },
  {
    "word": "Diverse",
    "type": "adjective",
    "turkish": "Çeşitli, türlü türlü",
    "example": "The city has a very diverse population.",
    "turkishExample": "Şehrin çok çeşitli bir nüfusu var."
  },
  {
    "word": "Divulge",
    "type": "verb",
    "turkish": "İfşa etmek, açığa vurmak, sızdırmak",
    "example": "The police refused to divulge the identity of the witness.",
    "turkishExample": "Polis tanığın kimliğini ifşa etmeyi reddetti."
  },
  {
    "word": "Docile",
    "type": "adjective",
    "turkish": "Uysal, halim selim, yumuşak başlı",
    "example": "The horse was very docile and easy to ride.",
    "turkishExample": "At çok uysaldı ve binmesi kolaydı."
  },
  {
    "word": "Dogmatic",
    "type": "adjective",
    "turkish": "Dogmatik, inatçı, kesin inançlı",
    "example": "He is very dogmatic in his religious views.",
    "turkishExample": "Dini görüşlerinde çok dogmatiktir (kesin inançlıdır)."
  },
  {
    "word": "Dormant",
    "type": "adjective",
    "turkish": "Atıl, uyuyan, uykuda olan, eylemsiz",
    "example": "The volcano has been dormant for hundreds of years.",
    "turkishExample": "Yanardağ yüzlerce yıldır uykudadır (eylemsizdir)."
  },
  {
    "word": "Dubious",
    "type": "adjective",
    "turkish": "Şüpheli, kuşkulu, tekinsiz",
    "example": "He has a dubious reputation in the financial world.",
    "turkishExample": "Finans dünyasında şüpheli bir itibarı var."
  },
  {
    "word": "Duplicity",
    "type": "noun",
    "turkish": "İkiyüzlülük, hilekarlık",
    "example": "She was shocked by his duplicity.",
    "turkishExample": "Onun ikiyüzlülüğüne şok oldu."
  },
  {
    "word": "Ebullient",
    "type": "adjective",
    "turkish": "Coşkulu, hayat dolu, kaynayan",
    "example": "He was in an ebullient mood after the victory.",
    "turkishExample": "Galibiyetten sonra coşkulu bir ruh halindeydi."
  },
  {
    "word": "Eclectic",
    "type": "adjective",
    "turkish": "Eklektik, seçmeci, çeşitli kaynaklardan toplanmış",
    "example": "Her musical tastes are quite eclectic.",
    "turkishExample": "Müzik zevki oldukça eklektiktir (çeşitlidir)."
  },
  {
    "word": "Efficacy",
    "type": "noun",
    "turkish": "Etkililik, yararlılık",
    "example": "The vaccine has shown great efficacy in the trials.",
    "turkishExample": "Aşı, denemelerde büyük bir etkililik gösterdi."
  },
  {
    "word": "Egregious",
    "type": "adjective",
    "turkish": "Çok kötü, sırıtan, dehşet verici (hata vb.)",
    "example": "It was an egregious breach of safety protocol.",
    "turkishExample": "Güvenlik protokolünün çok kötü (dehşet verici) bir ihlaliydi."
  },
  {
    "word": "Elucidate",
    "type": "verb",
    "turkish": "Açıklığa kavuşturmak, izah etmek, aydınlatmak",
    "example": "The report attempts to elucidate the causes of the crisis.",
    "turkishExample": "Rapor krizin nedenlerini açıklamaya (aydınlatmaya) çalışıyor."
  },
  {
    "word": "Elusive",
    "type": "adjective",
    "turkish": "Ele geçmez, kaçamak, anlaşılması zor",
    "example": "The criminal has remained elusive for weeks.",
    "turkishExample": "Suçlu haftalardır ele geçmiyor (kaçıyor)."
  },
  {
    "word": "Emancipate",
    "type": "verb",
    "turkish": "Özgürlüğüne kavuşturmak, serbest bırakmak",
    "example": "The slaves were finally emancipated in 1863.",
    "turkishExample": "Köleler nihayet 1863'te özgürlüklerine kavuştular."
  },
  {
    "word": "Embellish",
    "type": "verb",
    "turkish": "Süslemek, güzelleştirmek, abartarak anlatmak",
    "example": "The story was embellished with many extra details.",
    "turkishExample": "Hikaye pek çok ekstra detayla süslendi (abartıldı)."
  },
  {
    "word": "Empathy",
    "type": "noun",
    "turkish": "Empati, duygudaşlık",
    "example": "He has a great deal of empathy for the poor.",
    "turkishExample": "Yoksullara karşı büyük bir empatisi var."
  },
  {
    "word": "Empirical",
    "type": "adjective",
    "turkish": "Deneysel, deneyime dayalı",
    "example": "There is no empirical evidence to support his theory.",
    "turkishExample": "Teorisini destekleyecek deneysel (deneyime dayalı) bir kanıt yok."
  },
  {
    "word": "Emulate",
    "type": "verb",
    "turkish": "Taklit etmek, benzemeye çalışmak, yarışmak",
    "example": "Aspiring artists often try to emulate the great masters.",
    "turkishExample": "Genç sanatçılar genellikle büyük ustaları taklit etmeye çalışırlar."
  },
  {
    "word": "Enervate",
    "type": "verb",
    "turkish": "Gücünü kesmek, zayıflatmak, bezdirmek",
    "example": "The hot weather enervated the troops.",
    "turkishExample": "Sıcak hava birliklerin gücünü kesti (onları bitkin bıraktı)."
  },
  {
    "word": "Engender",
    "type": "verb",
    "turkish": "Neden olmak, doğurmak, uyandırmak",
    "example": "The new policy engendered a lot of controversy.",
    "turkishExample": "Yeni politika pek çok tartışmaya neden oldu."
  },
  {
    "word": "Enigma",
    "type": "noun",
    "turkish": "Bilahare, gizem, muamma",
    "example": "His disappearance remains an enigma.",
    "turkishExample": "Kayboluşu bir muamma (gizem) olarak kalıyor."
  },
  {
    "word": "Enumerate",
    "type": "verb",
    "turkish": "Sıralamak, tek tek saymak",
    "example": "The report enumerates all the problems we encountered.",
    "turkishExample": "Rapor karşılaştığımız tüm sorunları tek tek sıralıyor."
  },
  {
    "word": "Ephemeral",
    "type": "adjective",
    "turkish": "Kısa süreli, geçici, ölümlü",
    "example": "Fame is often ephemeral.",
    "turkishExample": "Şöhret genellikle geçicidir (kısa sürelidir)."
  },
  {
    "word": "Equanimity",
    "type": "noun",
    "turkish": "Sakinlik, soğukkanlılık, huzur",
    "example": "He faced the crisis with great equanimity.",
    "turkishExample": "Krizi büyük bir soğukkanlılıkla karşıladı."
  },
  {
    "word": "Equitable",
    "type": "adjective",
    "turkish": "Hakça, adil, tarafsız",
    "example": "The goal is to provide an equitable education for all students.",
    "turkishExample": "Hedef, tüm öğrenciler için adil (hakça) bir eğitim sağlamaktır."
  },
  {
    "word": "Equivocal",
    "type": "adjective",
    "turkish": "İki anlamlı, şüpheli, belirsiz",
    "example": "His response to the question was quite equivocal.",
    "turkishExample": "Soruyu verdiği cevap oldukça belirsizdi (kaçamaktı)."
  },
  {
    "word": "Erudite",
    "type": "adjective",
    "turkish": "Bilgin, ilim irfan sahibi, çok okumuş",
    "example": "He is an erudite scholar of ancient history.",
    "turkishExample": "Antik tarihin çok bilgili (erudite) bir bilginidir."
  },
  {
    "word": "Esoteric",
    "type": "adjective",
    "turkish": "Ezoterik, sadece sınırlı bir kitle tarafından anlaşılan, gizli",
    "example": "The book contains esoteric knowledge about alchemy.",
    "turkishExample": "Kitap, simya hakkında sadece sınırlı bir kitlece bilinen (ezoterik) bilgiler içeriyor."
  },
  {
    "word": "Eulogy",
    "type": "noun",
    "turkish": "Övgü dolu söz, cenaze konuşması",
    "example": "He delivered a moving eulogy at the funeral.",
    "turkishExample": "Cenazede etkileyici bir övgü konuşması yaptı."
  },
  {
    "word": "Euphemism",
    "type": "noun",
    "turkish": "Örtmece, güzel adlandırma (kötü bir şeyi yumuşatarak söyleme)",
    "example": "'Passed away' is a euphemism for 'died'.",
    "turkishExample": "'Vefat etti' kelimesi 'öldü' kelimesi için bir güzel adlandırmadır (örtmece)."
  },
  {
    "word": "Exalt",
    "type": "verb",
    "turkish": "Yüceltmek, övmek, rütbesini yükseltmek",
    "example": "The king was exalted by his subjects.",
    "turkishExample": "Kral, tebaası tarafından yüceltildi."
  },
  {
    "word": "Exasperate",
    "type": "verb",
    "turkish": "Sinirlendirmek, canından bezdirmek, çileden çıkarmak",
    "example": "The constant noise was beginning to exasperate the residents.",
    "turkishExample": "Sürekli gürültü sakinleri canından bezdirmeye başlıyordu."
  },
  {
    "word": "Exculpate",
    "type": "verb",
    "turkish": "Suçsuz çıkarmak, beraat ettirmek",
    "example": "The new evidence should exculpate him from all charges.",
    "turkishExample": "Yeni kanıt onu tüm suçlamalardan beraat ettirmeli."
  },
  {
    "word": "Exemplary",
    "type": "adjective",
    "turkish": "Örnek niteliğinde, ibretlik",
    "example": "Her behavior was exemplary.",
    "turkishExample": "Davranışı örnek niteliğindeydi."
  },
  {
    "word": "Exhaustive",
    "type": "adjective",
    "turkish": "Kapsamlı, detaylı, yorucu",
    "example": "The police carried out an exhaustive search of the area.",
    "turkishExample": "Polis bölgede kapsamlı (detaylı) bir arama yaptı."
  },
  {
    "word": "Exhilarating",
    "type": "adjective",
    "turkish": "Neşelendirici, canlandırıcı, heyecan verici",
    "example": "The roller coaster ride was exhilarating.",
    "turkishExample": "Hız treni yolculuğu heyecan verici ve canlandırıcıydı."
  },
  {
    "word": "Exigent",
    "type": "adjective",
    "turkish": "Acil, zorlayıcı, titizlik isteyen",
    "example": "The task reached an exigent stage.",
    "turkishExample": "Görev acil (zorlayıcı) bir aşamaya ulaştı."
  },
  {
    "word": "Exonerate",
    "type": "verb",
    "turkish": "Temize çıkarmak, beraat ettirmek",
    "example": "The new test results exonerated him from all suspicion.",
    "turkishExample": "Yeni test sonuçları onu tüm şüphelerden temize çıkardı."
  },
  {
    "word": "Exorbitant",
    "type": "adjective",
    "turkish": "Fahiş, aşırı yüksek (fiyat vb.)",
    "example": "The hotel charges exorbitant prices for drinks.",
    "turkishExample": "Otel içecekler için fahiş fiyatlar talep ediyor."
  },
  {
    "word": "Expedient",
    "type": "adjective",
    "turkish": "Uygun, yerinde, çıkarına uygun",
    "example": "It was politically expedient to follow the rules.",
    "turkishExample": "Kurallara uymak siyasi açıdan (çıkarlara) uygundu."
  },
  {
    "word": "Explicit",
    "type": "adjective",
    "turkish": "Açık, bariz, net",
    "example": "The instructions were very explicit.",
    "turkishExample": "Talimatlar çok açıktı (netti)."
  },
  {
    "word": "Exponent",
    "type": "noun",
    "turkish": "Temsilci, savunucu, üs (matematiksel)",
    "example": "He is a leading exponent of modern art.",
    "turkishExample": "Modern sanatın önde gelen bir temsilcisidir."
  },
  {
    "word": "Expound",
    "type": "verb",
    "turkish": "Uzun uzadıya anlatmak, açıklamak",
    "example": "He expounded his views on the subject at great length.",
    "turkishExample": "Konu hakkındaki görüşlerini uzun uzadıya açıkladı."
  },
  {
    "word": "Expunge",
    "type": "verb",
    "turkish": "Silmek, çıkartmak, yok etmek",
    "example": "He wanted to expunge the incident from his memory.",
    "turkishExample": "Olayı hafızasından silmek istedi."
  },
  {
    "word": "Extant",
    "type": "adjective",
    "turkish": "Halen var olan, günümüze kadar ulaşmış",
    "example": "This is the only extant copy of the manuscript.",
    "turkishExample": "Bu, el yazmasının günümüze ulaşmış tek kopyasıdır."
  },
  {
    "word": "Extirpate",
    "type": "verb",
    "turkish": "Kökünden kurutmak, yok etmek",
    "example": "The goal is to extirpate the disease completely.",
    "turkishExample": "Hedef hastalığı tamamen yok etmektir."
  },
  {
    "word": "Extol",
    "type": "verb",
    "turkish": "Övmek, göklere çıkarmak",
    "example": "The critics extolled the beauty of the film.",
    "turkishExample": "Eleştirmenler filmin güzelliğini göklere çıkardılar."
  },
  {
    "word": "Extraneous",
    "type": "adjective",
    "turkish": "Dışsal, ilgisiz, yabancı",
    "example": "You should remove any extraneous information from the report.",
    "turkishExample": "Rapordaki ilgisiz (gereksiz) bilgileri kaldırmalısınız."
  },
  {
    "word": "Extravagant",
    "type": "adjective",
    "turkish": "Müsrif, savurgan, aşırı",
    "example": "Her lifestyle was very extravagant.",
    "turkishExample": "Yaşam tarzı çok savurgandı (müsrifti)."
  },
  {
    "word": "Extricate",
    "type": "verb",
    "turkish": "Kurtarmak, çıkarmak (zor durumdan vb.)",
    "example": "He managed to extricate himself from the difficult situation.",
    "turkishExample": "Kendisini o zor durumdan kurtarmayı başardı."
  },
  {
    "word": "Exuberant",
    "type": "adjective",
    "turkish": "Coşkulu, gür, bereketli",
    "example": "He was in an exuberant mood.",
    "turkishExample": "Coşkulu bir ruh halindeydi."
  },
  {
    "word": "Facetious",
    "type": "adjective",
    "turkish": "Şakacı, alaycı, yersiz şaka yapan",
    "example": "Stop being facetious and take this seriously.",
    "turkishExample": "Alay etmeyi (yersiz şakaları) bırak ve bunu ciddiye al."
  },
  {
    "word": "Fastidious",
    "type": "adjective",
    "turkish": "Titiz, zor beğenen, kılı kırk yaran",
    "example": "He is very fastidious about his clothes.",
    "turkishExample": "Kıyafetleri konusunda çok titizdir (mükemmeliyetçidir)."
  },
  {
    "word": "Feasible",
    "type": "adjective",
    "turkish": "Mümkün, uygulanabilir",
    "example": "Is it feasible to finish the project by Friday?",
    "turkishExample": "Projeyi Cuma gününe kadar bitirmek mümkün mü?"
  },
  {
    "word": "Fervent",
    "type": "adjective",
    "turkish": "Ateşli, coşkulu, samimi",
    "example": "He is a fervent supporter of the environmental movement.",
    "turkishExample": "Çevre hareketinin ateşli bir destekçisidir."
  },
  {
    "word": "Fickle",
    "type": "adjective",
    "turkish": "Değişken, vefasız, kararsız",
    "example": "The weather in this region is very fickle.",
    "turkishExample": "Bu bölgedeki hava çok değişkendir."
  },
  {
    "word": "Finesse",
    "type": "noun",
    "turkish": "İncelik, ustalık, beceri",
    "example": "He handled the difficult situation with great finesse.",
    "turkishExample": "Zor durumu büyük bir ustalıkla idare etti."
  },
  {
    "word": "Flagrant",
    "type": "adjective",
    "turkish": "Apaçık, bariz, arsızca (suç vb.)",
    "example": "It was a flagrant violation of the rules.",
    "turkishExample": "Kuralların apaçık (arsızca) bir ihlaliydi."
  },
  {
    "word": "Flippant",
    "type": "adjective",
    "turkish": "Saygısız, laubali, ciddiyetsiz",
    "example": "He made a flippant remark about the tragedy.",
    "turkishExample": "Trajedi hakkında laubali (ciddiyetsiz) bir yorumda bulundu."
  },
  {
    "word": "Florid",
    "type": "adjective",
    "turkish": "Süslü, kabarık, kırmızı suratlı",
    "example": "He wrote in a very florid style.",
    "turkishExample": "Çok süslü (ağdalı) bir tarzda yazdı."
  },
  {
    "word": "Flout",
    "type": "verb",
    "turkish": "Küçümsemek, hiçe saymak, alay etmek",
    "example": "They continued to flout the law.",
    "turkishExample": "Yasaları hiçe saymaya devam ettiler."
  },
  {
    "word": "Foible",
    "type": "noun",
    "turkish": "Zayıf nokta, kusurcuk, karakteristik özellik",
    "example": "We all have our little foibles.",
    "turkishExample": "Hepimizin küçük kusurları (zayıf noktaları) vardır."
  },
  {
    "word": "Foment",
    "type": "verb",
    "turkish": "Kışkırtmak, körüklemek, teşvik etmek (kötü bir şeyi)",
    "example": "He was accused of fomenting unrest in the city.",
    "turkishExample": "Şehirde huzursuzluğu körüklemekle suçlandı."
  },
  {
    "word": "Forbearance",
    "type": "noun",
    "turkish": "Hoşgörü, sabır, tahammül",
    "example": "He showed great forbearance in dealing with the difficult customer.",
    "turkishExample": "Zor müşteriyle uğraşırken büyük bir sabır (hoşgörü) gösterdi."
  },
  {
    "word": "Format",
    "type": "noun",
    "turkish": "Biçim, format",
    "example": "The document is in a PDF format.",
    "turkishExample": "Belge PDF formatındadır."
  },
  {
    "word": "Formidable",
    "type": "adjective",
    "turkish": "Heybetli, korkunç, zorlu",
    "example": "He faced a formidable opponent in the final.",
    "turkishExample": "Finalde zorlu bir rakiple karşılaştı."
  },
  {
    "word": "Fortitude",
    "type": "noun",
    "turkish": "Metanet, dayanıklılık, ruhsal güç",
    "example": "She showed great fortitude throughout her long illness.",
    "turkishExample": "Uzun süren hastalığı boyunca büyük bir metanet gösterdi."
  },
  {
    "word": "Fractious",
    "type": "adjective",
    "turkish": "Huysuz, geçimsiz, aksi",
    "example": "The children were tired and fractious.",
    "turkishExample": "Çocuklar yorgun ve huysuzdu."
  },
  {
    "word": "Frail",
    "type": "adjective",
    "turkish": "Cılız, zayıf, kırılgan",
    "example": "The old man was very frail.",
    "turkishExample": "Yaşlı adam çok cılızdı (zayıftı)."
  },
  {
    "word": "Frantic",
    "type": "adjective",
    "turkish": "Telaşlı, çılgına dönmüş, heyecanlı",
    "example": "He made a frantic attempt to escape.",
    "turkishExample": "Kaçmak için telaşlı (çılgınca) bir girişimde bulundu."
  },
  {
    "word": "Fraudulent",
    "type": "adjective",
    "turkish": "Hileli, dolandırıcı, sahte",
    "example": "The transaction was found to be fraudulent.",
    "turkishExample": "İşlemin hileli olduğu ortaya çıktı."
  },
  {
    "word": "Fraught",
    "type": "adjective",
    "turkish": "Dolu, yüklü (tehlike vb. ile), gergin",
    "example": "The situation was fraught with danger.",
    "turkishExample": "Durum tehlikeyle doluydu."
  },
  {
    "word": "Frivolous",
    "type": "adjective",
    "turkish": "Gereksiz, anlamsız, ciddiyetsiz",
    "example": "He spent all his money on frivolous things.",
    "turkishExample": "Tüm parasını gereksiz (anlamsız) şeylere harcadı."
  },
  {
    "word": "Furtive",
    "type": "adjective",
    "turkish": "Sinsi, kaçamak, gizli kapaklı",
    "example": "He threw a furtive glance at the door.",
    "turkishExample": "Kapıya kaçamak (sinsi) bir bakış attı."
  },
  {
    "word": "Futile",
    "type": "adjective",
    "turkish": "Nafile, boşuna, beyhude",
    "example": "It was a futile effort to change his mind.",
    "turkishExample": "Onun fikrini değiştirmek boşuna (nafile) bir çabaydı."
  },
  {
    "word": "Gainsay",
    "type": "verb",
    "turkish": "Aksini iddia etmek, karşı çıkmak, reddetmek",
    "example": "There is no gainsaying his achievements.",
    "turkishExample": "Onun başarılarının aksini iddia etmek mümkün değil."
  },
  {
    "word": "Garnish",
    "type": "verb",
    "turkish": "Süslemek, (yemek vb.) donatmak",
    "example": "The fish was garnished with a slice of lemon.",
    "turkishExample": "Balık bir dilim limonla süslendi (donatıldı)."
  },
  {
    "word": "Garrulous",
    "type": "adjective",
    "turkish": "Geveze, konuşkan",
    "example": "He is a very garrulous person.",
    "turkishExample": "Çok geveze biridir."
  },
  {
    "word": "Generic",
    "type": "adjective",
    "turkish": "Genel, kapsamlı, marka olmayan",
    "example": "The term 'fruit' is a generic name for apples, pears, and bananas.",
    "turkishExample": "'Meyve' terimi elma, armut ve muz için genel bir isimdir."
  },
  {
    "word": "Genesis",
    "type": "noun",
    "turkish": "Oluşum, doğuş, köken",
    "example": "The book explains the genesis of the universe.",
    "turkishExample": "Kitap evrenin oluşumunu (doğuşunu) açıklıyor."
  },
  {
    "word": "Genteel",
    "type": "adjective",
    "turkish": "Kibar, asil, eğitimli",
    "example": "They live in a very genteel neighborhood.",
    "turkishExample": "Çok kibar (nezih) bir mahallede yaşıyorlar."
  },
  {
    "word": "Germane",
    "type": "adjective",
    "turkish": "İlgili, konuyla alakalı",
    "example": "The question was not germane to the discussion.",
    "turkishExample": "Soru tartışmayla alakalı değildi."
  },
  {
    "word": "Gesticulate",
    "type": "verb",
    "turkish": "Jestlerle anlatmak, el kol hareketi yapmak",
    "example": "He was gesticulating wildly while he talked.",
    "turkishExample": "Konuşurken çılgınca el kol hareketi yapıyordu (jestlerle anlatıyordu)."
  },
  {
    "word": "Giddy",
    "type": "adjective",
    "turkish": "Başı dönen, sersem, fırıldak (mecazi)",
    "example": "He felt giddy after spinning around.",
    "turkishExample": "Kendi etrafında döndükten sonra başı döndü (sersemledi)."
  },
  {
    "word": "Glacial",
    "type": "adjective",
    "turkish": "Buzul, çok soğuk, çok yavaş",
    "example": "The project is moving at a glacial pace.",
    "turkishExample": "Proje buzul hızında (çok yavaş) ilerliyor."
  },
  {
    "word": "Gleam",
    "type": "verb",
    "turkish": "Işıldamak, parlamak, belli belirsiz görünmek",
    "example": "The car gleams in the sunlight.",
    "turkishExample": "Araba güneş ışığında parlıyor (ışıldıyor)."
  },
  {
    "word": "Glib",
    "type": "adjective",
    "turkish": "Akıcı ama yüzeysel, lafbaz",
    "example": "He gave a glib excuse for his mistake.",
    "turkishExample": "Hatası için yüzeysel (inandırıcılığı olmayan) bir mazeret uydurdu."
  },
  {
    "word": "Gloat",
    "type": "verb",
    "turkish": "Kötü niyetle sevinmek, hırsla bakmak",
    "example": "Stop gloating over your success.",
    "turkishExample": "Başarınla (insanları incitecek şekilde) sevinip durma."
  },
  {
    "word": "Glut",
    "type": "noun",
    "turkish": "Fazlalık, aşırılık, arz fazlası",
    "example": "There is a glut of oil on the market.",
    "turkishExample": "Piyasada bir petrol fazlası (arz fazlası) var."
  },
  {
    "word": "Grandeur",
    "type": "noun",
    "turkish": "İhtişam, görkem, büyüklük",
    "example": "The grandeur of the mountains was breathtaking.",
    "turkishExample": "Dağların ihtişamı nefes kesiciydi."
  },
  {
    "word": "Grandiose",
    "type": "adjective",
    "turkish": "Görkemli, gösterişli, iddialı",
    "example": "He has grandiose plans for the company.",
    "turkishExample": "Şirket için çok iddialı (görkemli) planları var."
  },
  {
    "word": "Grapple",
    "type": "verb",
    "turkish": "Boğuşmak, uğraşmak, kavramak",
    "example": "The government is grappling with a multi-billion dollar deficit.",
    "turkishExample": "Hükümet milyarlarca dolarlık bir açıkla boğuşuyor."
  },
  {
    "word": "Gratuitous",
    "type": "adjective",
    "turkish": "Gereksiz, anlamsız, karşılıksız",
    "example": "The movie contains a lot of gratuitous violence.",
    "turkishExample": "Film pek çok gereksiz (anlamsız) şiddet içeriyor."
  },
  {
    "word": "Gregarious",
    "type": "adjective",
    "turkish": "Sokulgan, sosyal, toplu yaşayan",
    "example": "He is a very gregarious person.",
    "turkishExample": "Çok sosyal (sokulgan) biridir."
  },
  {
    "word": "Grievous",
    "type": "adjective",
    "turkish": "Acı veren, ağır, şiddetli",
    "example": "He suffered a grievous injury.",
    "turkishExample": "Ağır (acı veren) bir yara aldı."
  },
  {
    "word": "Grotesque",
    "type": "adjective",
    "turkish": "Grotesk, acayip, garip",
    "example": "The carvings were grotesque and ugly.",
    "turkishExample": "Oymalar garip (acayip) ve çirkindi."
  },
  {
    "word": "Guerilla",
    "type": "noun",
    "turkish": "Gerilla",
    "example": "The guerilla forces have controlled the region for years.",
    "turkishExample": "Gerilla güçleri yıllardır bölgeyi kontrol ediyor."
  },
  {
    "word": "Guile",
    "type": "noun",
    "turkish": "Hile, kurnazlık, aldatma",
    "example": "He used guile and deception to get ahead.",
    "turkishExample": "Öne geçmek için kurnazlık ve aldatma kullandı."
  },
  {
    "word": "Hackneyed",
    "type": "adjective",
    "turkish": "Basma kalıp, bayat, klişe",
    "example": "The plot of the movie was very hackneyed.",
    "turkishExample": "Filmin konusu çok basma kalıp (klişe) idi."
  },
  {
    "word": "Hallow",
    "type": "verb",
    "turkish": "Kutsamak, saygı göstermek",
    "example": "A hallowed tradition.",
    "turkishExample": "Kutsal (çok saygı duyulan) bir gelenek."
  },
  {
    "word": "Hapless",
    "type": "adjective",
    "turkish": "Talihsiz, kısmetsiz",
    "example": "The hapless victim was robbed twice.",
    "turkishExample": "Talihsiz kurban iki kez soyuldu."
  },
  {
    "word": "Harangue",
    "type": "verb",
    "turkish": "Nutuk çekmek, azarlamak",
    "example": "The teacher harangued the students for their lack of discipline.",
    "turkishExample": "Öğretmen, disiplinsizliklerinden dolayı öğrencilere nutuk çekti (onları azarladı)."
  },
  {
    "word": "Harbinger",
    "type": "noun",
    "turkish": "Haberci, müjdeci, işaret",
    "example": "The first swallow is a harbinger of spring.",
    "turkishExample": "İlk kırlangıç baharın habercisidir."
  },
  {
    "word": "Haughty",
    "type": "adjective",
    "turkish": "Kibirli, mağrur, üstten bakan",
    "example": "He has a very haughty manner.",
    "turkishExample": "Çok kibir bir tavrı var."
  },
  {
    "word": "Hazy",
    "type": "adjective",
    "turkish": "Puslu, dumanlı, belirsiz",
    "example": "The weather was hazy in the morning.",
    "turkishExample": "Sabah hava pusluydu."
  },
  {
    "word": "Hedonism",
    "type": "noun",
    "turkish": "Hazcılık, hedonizm",
    "example": "His life was one of pure hedonism.",
    "turkishExample": "Hayatı tamamen hazcılık (hedonizm) üzerine kuruluydu."
  },
  {
    "word": "Heinous",
    "type": "adjective",
    "turkish": "Menfur, iğrenç, nefret uyandıran",
    "example": "It was a heinous crime.",
    "turkishExample": "İğrenç (menfur) bir suçtu."
  },
  {
    "word": "Hierarchy",
    "type": "noun",
    "turkish": "Hiyerarşi, alt-üst ilişkisi",
    "example": "There is a clear hierarchy within the company.",
    "turkishExample": "Şirket içinde net bir hiyerarşi var."
  },
  {
    "word": "Homogeneous",
    "type": "adjective",
    "turkish": "Homojen, bağdaşık, tekdüze",
    "example": "The population of the region is quite homogeneous.",
    "turkishExample": "Bölge nüfusu oldukça homojendir."
  },
  {
    "word": "Hostility",
    "type": "noun",
    "turkish": "Düşmanlık, husumet",
    "example": "There is no hostility between the Two countries.",
    "turkishExample": "İki ülke arasında düşmanlık yok."
  },
  {
    "word": "Hubris",
    "type": "noun",
    "turkish": "Kibir, gurur (yıkıma yol açan)",
    "example": "The leader was undone by his own hubris.",
    "turkishExample": "Lider, kendi kibri yüzünden yıkıldı."
  },
  {
    "word": "Hypocrisy",
    "type": "noun",
    "turkish": "İkiyüzlülük, riyakarlık",
    "example": "It was a classic example of hypocrisy.",
    "turkishExample": "Klasik bir ikiyüzlülük (riyakarlık) örneğiydi."
  },
  {
    "word": "Hypothetical",
    "type": "adjective",
    "turkish": "Varsayımsal, hipoteze dayalı, farazi",
    "example": "Let's consider a hypothetical situation.",
    "turkishExample": "Farazi (varsayımsal) bir durumu ele alalım."
  },
  {
    "word": "Iconoclast",
    "type": "noun",
    "turkish": "Yerleşik inançlara karşı çıkan kimse, gelenek yıkıcı",
    "example": "He was an iconoclast who challenged the status quo.",
    "turkishExample": "Mevcut durumu sorgulayan bir gelenek yıkıcı (iconoclast) idi."
  },
  {
    "word": "Ideology",
    "type": "noun",
    "turkish": "İdeoloji",
    "example": "The Two parties have very different ideologies.",
    "turkishExample": "İki partinin çok farklı ideolojileri var."
  },
  {
    "word": "Idiosyncrasy",
    "type": "noun",
    "turkish": "Nev-i şahsına münhasırlık, kendine özgü özellik, alışılmadık davranış",
    "example": "One of his idiosyncrasies is that he always wears Two different socks.",
    "turkishExample": "Onun garip özelliklerinden (idiosyncrasy) biri her zaman iki farklı çorap giymesidir."
  },
  {
    "word": "Idolize",
    "type": "verb",
    "turkish": "Putlaştırmak, taparcasına sevmek",
    "example": "The fans idolize the young singer.",
    "turkishExample": "Hayranlar genç şarkıcıyı taparcasına seviyorlar (putlaştırıyorlar)."
  },
  {
    "word": "Ignominious",
    "type": "adjective",
    "turkish": "Utanç verici, rezil",
    "example": "The team suffered an ignominious defeat.",
    "turkishExample": "Takım utanç verici (rezilce) bir yenilgi aldı."
  },
  {
    "word": "Illicit",
    "type": "adjective",
    "turkish": "Yasadışı, kanunsuz",
    "example": "The sale of illicit drugs is a major problem.",
    "turkishExample": "Yasadışı uyuşturucu satışı büyük bir sorundur."
  },
  {
    "word": "Immaculate",
    "type": "adjective",
    "turkish": "Lekesiz, tertemiz, kusursuz",
    "example": "The house was in an immaculate condition.",
    "turkishExample": "Ev tertemiz (kusursuz) bir durumdaydı."
  },
  {
    "word": "Imminent",
    "type": "adjective",
    "turkish": "Eli kulağında, yakın, her an olabilir",
    "example": "A major crisis is imminent.",
    "turkishExample": "Büyük bir kriz kapıda (her an olabilir)."
  },
  {
    "word": "Immutable",
    "type": "adjective",
    "turkish": "Değişmez, sabit",
    "example": "The laws of nature are immutable.",
    "turkishExample": "Doğa yasaları değişmezdir."
  },
  {
    "word": "Impartial",
    "type": "adjective",
    "turkish": "Tarafsız, adil",
    "example": "The judge must be impartial.",
    "turkishExample": "Yargıç tarafsız olmalıdır."
  },
  {
    "word": "Impeccable",
    "type": "adjective",
    "turkish": "Kusursuz, hatasız",
    "example": "Her English is impeccable.",
    "turkishExample": "İngilizcesi kusursuzdur."
  },
  {
    "word": "Impecunious",
    "type": "adjective",
    "turkish": "Parasız, fakir",
    "example": "The young artist was impecunious but full of hope.",
    "turkishExample": "Genç sanatçı parasızdı ama umut doluydu."
  },
  {
    "word": "Imperious",
    "type": "adjective",
    "turkish": "Kibirli, otoriter, emredici",
    "example": "He has a very imperious manner.",
    "turkishExample": "Çok otoriter (emredici) bir tavrı var."
  },
  {
    "word": "Imperturbable",
    "type": "adjective",
    "turkish": "Sakin, soğukkanlı, istifini bozmayan",
    "example": "He remained imperturbable even in the face of great danger.",
    "turkishExample": "Büyük bir tehlike karşısında bile istifini bozmadı (sakin kaldı)."
  },
  {
    "word": "Impervious",
    "type": "adjective",
    "turkish": "Geçirmez, etkilenmez",
    "example": "Leather is impervious to water.",
    "turkishExample": "Deri su geçirmezdir."
  },
  {
    "word": "Impetuous",
    "type": "adjective",
    "turkish": "Düşüncesizce hareket eden, fevri, aceleci",
    "example": "He made an impetuous decision to quit his job.",
    "turkishExample": "İşinden ayrılmak için fevri (düşüncesizce) bir karar verdi."
  },
  {
    "word": "Implacable",
    "type": "adjective",
    "turkish": "Yatıştırılamaz, amansız, uzlaşmaz",
    "example": "He has remained an implacable opponent of the regime.",
    "turkishExample": "Rejimin amansız (uzlaşmaz) bir muhalifi olarak kaldı."
  },
  {
    "word": "Importune",
    "type": "verb",
    "turkish": "Sürekli rahatsız etmek, yalvarıp yakarmak, musallat olmak",
    "example": "She was importuned by beggars in the street.",
    "turkishExample": "Sokakta dilenciler tarafından rahatsız edildi (yalvarıp yakarıldı)."
  },
  {
    "word": "Impound",
    "type": "verb",
    "turkish": "El koymak, hapsetmek, (hayvanı) barınağa kapatmak",
    "example": "The police impounded the car.",
    "turkishExample": "Polis arabaya el koydu."
  },
  {
    "word": "Imprecation",
    "type": "noun",
    "turkish": "Beddua, lanet okuma",
    "example": "He uttered a loud imprecation.",
    "turkishExample": "Yüksek sesle bir beddua okudu."
  },
  {
    "word": "Impregnable",
    "type": "adjective",
    "turkish": "Zapt edilemez, ele geçirilemez, sarsılmaz",
    "example": "The fortress was considered impregnable.",
    "turkishExample": "Kale zapt edilemez (ele geçirilemez) kabul ediliyolu."
  },
  {
    "word": "Impromptu",
    "type": "adjective",
    "turkish": "Hazırlıksız, doğaçlama",
    "example": "He gave an impromptu speech at the party.",
    "turkishExample": "Partide hazırlıksız (doğaçlama) bir konuşma yaptı."
  },
  {
    "word": "Improvident",
    "type": "adjective",
    "turkish": "İleriyi göremeyen, tedbirsiz, savurgan",
    "example": "His improvident lifestyle led him into debt.",
    "turkishExample": "Tedbirsiz (savurgan) yaşam tarzı onu borca sürükledi."
  },
  {
    "word": "Improvise",
    "type": "verb",
    "turkish": "Doğaçlama yapmak, uyduruvermek",
    "example": "They had to improvise a meal from what was in the fridge.",
    "turkishExample": "Buzdolabındakilerle bir yemek uyduruvermek (doğaçlama yapmak) zorunda kaldılar."
  },
  {
    "word": "Imprudent",
    "type": "adjective",
    "turkish": "İhtiyatsız, basiretsiz, düşüncesiz",
    "example": "It would be imprudent to invest all your money in one company.",
    "turkishExample": "Tüm paranı tek bir şirkete yatırmak ihtiyatsızlık (düşüncesizlik) olur."
  },
  {
    "word": "Impudence",
    "type": "noun",
    "turkish": "Arsızlık, küstahlık",
    "example": "He was shocked by the boy's impudence.",
    "turkishExample": "Çocuğun küstahlığına (arsızlığına) şok oldu."
  },
  {
    "word": "Impugn",
    "type": "verb",
    "turkish": "Sorgulamak, aksini iddia etmek, dürüstlüğünden şüphe etmek",
    "example": "She was angry that her motives were being impugned.",
    "turkishExample": "Niyetlerinin sorgulanmasına (şüphe edilmesine) kızmıştı."
  },
  {
    "word": "Impunity",
    "type": "noun",
    "turkish": "Cezasız kalma, muafiyet",
    "example": "You cannot break the law with impunity.",
    "turkishExample": "Yasaları cezasız kalacak şekilde (yanına kar kalarak) çiğneyemezsin."
  },
  {
    "word": "Inadvertent",
    "type": "adjective",
    "turkish": "İstem dışı, kasıtsız, yanlışlıkla yapılan",
    "example": "It was an inadvertent error.",
    "turkishExample": "İstem dışı (yanlışlıkla yapılmış) bir hataydı."
  },
  {
    "word": "Inalienable",
    "type": "adjective",
    "turkish": "Devredilemez, vazgeçilemez",
    "example": "Freedom is an inalienable right.",
    "turkishExample": "Özgürlük devredilemez (vazgeçilemez) bir haktır."
  },
  {
    "word": "Inane",
    "type": "adjective",
    "turkish": "Anlamsız, boş, saçma sapan",
    "example": "Stop asking such inane questions.",
    "turkishExample": "Böyle anlamsız (saçma sapan) sorular sormayı bırak."
  },
  {
    "word": "Inaugurate",
    "type": "verb",
    "turkish": "Açılışını yapmak, (göreve) törenle başlatmak",
    "example": "The President will inaugurate the new hospital.",
    "turkishExample": "Başkan yeni hastanenin açılışını yapacak."
  },
  {
    "word": "Incandescent",
    "type": "adjective",
    "turkish": "Akkor, ışık saçan, parlayan",
    "example": "The incandescent light bulb.",
    "turkishExample": "Akkor (parlayan) ampul."
  },
  {
    "word": "Incarcerate",
    "type": "verb",
    "turkish": "Hapse atmak, hapsetmek",
    "example": "He was incarcerated for Two years.",
    "turkishExample": "İki yıl boyunca hapsedildi (hapse atıldı)."
  },
  {
    "word": "Incarnate",
    "type": "adjective",
    "turkish": "Vücut bulmuş, somutlaşmış",
    "example": "He is the devil incarnate.",
    "turkishExample": "O, şeytanın vücut bulmuş halidir."
  },
  {
    "word": "Incendiary",
    "type": "adjective",
    "turkish": "Yangın çıkarıcı, kışkırtıcı",
    "example": "He was arrested for his incendiary comments.",
    "turkishExample": "Kışkırtıcı (yangın çıkarıcı) yorumlarından dolayı tutuklandı."
  },
  {
    "word": "Incessant",
    "type": "adjective",
    "turkish": "Aralıksız, durmaksızın",
    "example": "The incessant noise made it impossible to sleep.",
    "turkishExample": "Aralıksız (durmak bilmeyen) gürültü uyumayı imkansız kıldı."
  },
  {
    "word": "Inchoate",
    "type": "adjective",
    "turkish": "Henüz başlamış, tamamlanmamış, şekillenmemiş",
    "example": "His ideas were still in an inchoate stage.",
    "turkishExample": "Fikirleri henüz şekillenmemiş (başlangıç) bir aşamadaydı."
  },
  {
    "word": "Incipient",
    "type": "adjective",
    "turkish": "Başlangıç halinde olan, yeni filizlenen",
    "example": "The signs of an incipient recovery are visible.",
    "turkishExample": "Yeni filizlenen bir iyileşmenin işaretleri görünüyor."
  },
  {
    "word": "Incisive",
    "type": "adjective",
    "turkish": "Keskin, delici, etkili (zeka, söz vb.)",
    "example": "He has an incisive mind.",
    "turkishExample": "Keskin (etkili) bir zekası var."
  },
  {
    "word": "Incite",
    "type": "verb",
    "turkish": "Kışkırtmak, teşvik etmek (kötü bir şeye)",
    "example": "They were accused of inciting violence.",
    "turkishExample": "Şiddete teşvik etmekle (kışkırtmakla) suçlandılar."
  },
  {
    "word": "Inlement",
    "type": "adjective",
    "turkish": "Sert, fırtınalı (hava), merhametsiz",
    "example": "Inclemet weather conditions.",
    "turkishExample": "Sert (fırtınalı) hava koşulları."
  },
  {
    "word": "Inclusive",
    "type": "adjective",
    "turkish": "Kapsamlı, dâhil",
    "example": "The price is inclusive of tax.",
    "turkishExample": "Fiyata vergi dâhildir."
  },
  {
    "word": "Incoherent",
    "type": "adjective",
    "turkish": "Tutarsız, anlaşılmaz, kopuk kopuk (konuşma vb.)",
    "example": "He was so angry that he became incoherent.",
    "turkishExample": "O kadar kızmıştı ki ne dediği anlaşılmaz (kopuk kopuk) bir hale geldi."
  },
  {
    "word": "Incompatible",
    "type": "adjective",
    "turkish": "Uyumsuz, bağdaşmaz",
    "example": "The Two systems are incompatible.",
    "turkishExample": "İki sistem birbiriyle uyumsuz (bağdaşmaz)."
  },
  {
    "word": "Incongruous",
    "type": "adjective",
    "turkish": "Uyumsuz, aykırı, yersiz",
    "example": "Practical jokes can seem incongruous in a hospital.",
    "turkishExample": "Eşek şakaları bir hastanede yersiz (aykırı) görünebilir."
  },
  {
    "word": "Inconsequential",
    "type": "adjective",
    "turkish": "Önemsiz, mantıksız, yersiz",
    "example": "The difference between the Two results was inconsequential.",
    "turkishExample": "İki sonuç arasındaki fark önemsizdi."
  },
  {
    "word": "Incorrigible",
    "type": "adjective",
    "turkish": "Islah olmaz, düzelmez",
    "example": "He is an incorrigible liar.",
    "turkishExample": "O ıslah olmaz bir yalancıdır."
  },
  {
    "word": "Incredulous",
    "type": "adjective",
    "turkish": "Şüpheci, inanmayan, hayretler içerisinde kalan",
    "example": "She was incredulous when she heard the news.",
    "turkishExample": "Haberi duyduğunda hayretler içerisinde kaldı (inanamadı)."
  },
  {
    "word": "Incriminate",
    "type": "verb",
    "turkish": "Suçlamak, suçlu çıkarmak, (suça) bulaştırmak",
    "example": "He refused to answer questions that might incriminate him.",
    "turkishExample": "Kendisini suçlu çıkarabilecek (suça bulaştırabilecek) soruları cevaplamayı reddetti."
  },
  {
    "word": "Inculpate",
    "type": "verb",
    "turkish": "Suçlamak, suç yüklemek",
    "example": "The evidence seemed to inculpate him.",
    "turkishExample": "Kanıtlar ona suç yüklüyor (onu suçluyor) gibi görünüyordu."
  },
  {
    "word": "Incumbent",
    "type": "adjective",
    "turkish": "Zorunlu, (görevini) sürdüren, görevli",
    "example": "It is incumbent on you to finish the work.",
    "turkishExample": "İşi bitirmek senin görevin (sana düşen bir zorunluluk)."
  },
  {
    "word": "Indecorous",
    "type": "adjective",
    "turkish": "Yersiz, edebe aykırı, çirkin",
    "example": "He was criticized for his indecorous behavior.",
    "turkishExample": "Edebe aykırı (çirkin) davranışlarından dolayı eleştirildi."
  },
  {
    "word": "Indefatigable",
    "type": "adjective",
    "turkish": "Yorulmaz, azimli, yorulmak bilmez",
    "example": "She is an indefatigable worker.",
    "turkishExample": "Yorulmak bilmez (azimli) bir çalışandır."
  },
  {
    "word": "Indelible",
    "type": "adjective",
    "turkish": "Silinmez, çıkmaz, unutulmaz",
    "example": "The experience left an indelible mark on his memory.",
    "turkishExample": "Deneyim hafızasında silinmez bir iz bıraktı."
  },
  {
    "word": "Indifferent",
    "type": "adjective",
    "turkish": "Kayıtsız, ilgisiz, tarafsız",
    "example": "He seemed indifferent to the news.",
    "turkishExample": "Habere karşı kayıtsız göründü."
  },
  {
    "word": "Indigenous",
    "type": "adjective",
    "turkish": "Yerli, yöreye özgü",
    "example": "The kangaroo is indigenous to Australia.",
    "turkishExample": "Kanguru Avustralya'ya özgüdür (yerlisidir)."
  },
  {
    "word": "Indigent",
    "type": "adjective",
    "turkish": "Yoksul, fakir, muhtaç",
    "example": "The charity provides food for indigent families.",
    "turkishExample": "Hayır kurumu muhtaç (yoksul) ailelere yiyecek sağlıyor."
  },
  {
    "word": "Indignant",
    "type": "adjective",
    "turkish": "Kızgın, küskün, haksızlığa uğramış hisseden",
    "example": "She was indignant at the way she had been treated.",
    "turkishExample": "Gördüğü muameleye karşı çok kızgındı (küskündü)."
  },
  {
    "word": "Indolent",
    "type": "adjective",
    "turkish": "Tembel, uyuşuk, miskin",
    "example": "The hot weather makes everyone feel indolent.",
    "turkishExample": "Sıcak hava herkesi uyuşuk (miskin) hissettiriyor."
  },
  {
    "word": "Indomitable",
    "type": "adjective",
    "turkish": "Yılmaz, boyun eğmez, sarsılmaz",
    "example": "Her indomitable spirit inspired everyone.",
    "turkishExample": "Onun yılmaz ruhu herkese ilham verdi."
  },
  {
    "word": "Indulgent",
    "type": "adjective",
    "turkish": "Hoşgörülü, yüz veren, müsamahalı",
    "example": "His parents were very indulgent with him.",
    "turkishExample": "Ailesi ona karşı çok müsamahalıydı (ona çok yüz veriyordu)."
  },
  {
    "word": "Inebriated",
    "type": "adjective",
    "turkish": "Sarhoş, akşamcı",
    "example": "He was clearly inebriated.",
    "turkishExample": "Açıkça sarhoştu."
  },
  {
    "word": "Inexorable",
    "type": "adjective",
    "turkish": "Amansız, sert, değiştirilemez, durdurulamaz",
    "example": "The inexorable progress of technology.",
    "turkishExample": "Teknolojinin durdurulamaz (amansız) ilerleyişi."
  },
  {
    "word": "Infallible",
    "type": "adjective",
    "turkish": "Hata yapmaz, yanılmaz, kesin",
    "example": "None of us is infallible.",
    "turkishExample": "Hiçbirimiz yanılmaz (hata yapmaz) değiliz."
  },
  {
    "word": "Infamous",
    "type": "adjective",
    "turkish": "Adı kötüye çıkmış, rezil, dilden dile dolaşan (kötülükle)",
    "example": "He is an infamous criminal.",
    "turkishExample": "Adı kötüye çıkmış (rezil) bir suçludur."
  },
  {
    "word": "Inference",
    "type": "noun",
    "turkish": "Çıkarım, sonuç, anlam çıkarma",
    "example": "What inference can you draw from the data?",
    "turkishExample": "Verilerden ne çıkarım yapabilirsin?"
  },
  {
    "word": "Infinitesimal",
    "type": "adjective",
    "turkish": "Çok küçük, sonsuz derece küçük",
    "example": "The difference between the Two points is infinitesimal.",
    "turkishExample": "İki nokta arasındaki fark sonsuz derece küçüktür (yok denecek kadar azdır)."
  },
  {
    "word": "Ingenious",
    "type": "adjective",
    "turkish": "Dahice, marifetli, usta işi",
    "example": "That's an ingenious solution to the problem.",
    "turkishExample": "Bu sorun için dahice (marifetli) bir çözüm."
  },
  {
    "word": "Ingenuous",
    "type": "adjective",
    "turkish": "Saf, temiz kalpli, dürüst, açık sözlü",
    "example": "He has an ingenuous personality.",
    "turkishExample": "Saf (temiz kalpli) bir kişiliği var."
  },
  {
    "word": "Ingratiate",
    "type": "verb",
    "turkish": "Gözüne girmek, yaranmak",
    "example": "He tried to ingratiate himself with the boss.",
    "turkishExample": "Patronun gözüne girmeye (ona yaranmaya) çalıştı."
  },
  {
    "word": "Inimical",
    "type": "adjective",
    "turkish": "Düşmanca, aykırı, zararlı",
    "example": "These new rules are inimical to the interests of the workers.",
    "turkishExample": "Bu yeni kurallar işçilerin çıkarlarına aykırıdır."
  },
  {
    "word": "Inimitable",
    "type": "adjective",
    "turkish": "Taklit edilemez, eşsiz",
    "example": "He has an inimitable style of writing.",
    "turkishExample": "Eşsiz (taklit edilemez) bir yazım tarzı var."
  },
  {
    "word": "Iniquity",
    "type": "noun",
    "turkish": "Adaletsizlik, haksızlık, kötülük",
    "example": "The iniquity of the situation was obvious to all.",
    "turkishExample": "Durumdaki adaletsizlik (kötülük) herkes için barizdi."
  },
  {
    "word": "Innocuous",
    "type": "adjective",
    "turkish": "Zararsız, tehlikesiz",
    "example": "It was just an innocuous remark.",
    "turkishExample": "Sadece zararsız (tehlikesiz) bir yorumdu."
  },
  {
    "word": "Inordinate",
    "type": "adjective",
    "turkish": "Aşırı, ölçüsüz, çok fazla",
    "example": "They spent an inordinate amount of time on the project.",
    "turkishExample": "Projeye aşırı (ölçüsüz) miktarda zaman harcadılar."
  },
  {
    "word": "Insatiable",
    "type": "adjective",
    "turkish": "Doymak bilmez, açgözlü",
    "example": "He has an insatiable appetite for power.",
    "turkishExample": "İktidara karşı doymak bilmez bir hırsı var."
  },
  {
    "word": "Inscrutable",
    "type": "adjective",
    "turkish": "Anlaşılmaz, gizemli, kapalı",
    "example": "He has an inscrutable expression on his face.",
    "turkishExample": "Yüzünde anlaşılmaz (gizemli) bir ifade var."
  },
  {
    "word": "Insidious",
    "type": "adjective",
    "turkish": "Sinsi, haince, gizlice yayılan",
    "example": "Cancer is an insidious disease.",
    "turkishExample": "Kanser sinsi (gizlice yayılan) bir hastalıktır."
  },
  {
    "word": "Insinuate",
    "type": "verb",
    "turkish": "İma etmek, sinsi sinsi sokulmak",
    "example": "What are you trying to insinuate?",
    "turkishExample": "Ne ima etmeye çalışıyorsun?"
  },
  {
    "word": "Insipid",
    "type": "adjective",
    "turkish": "Tatsız, yavan, ruhsuz",
    "example": "The coffee was weak and insipid.",
    "turkishExample": "Kahve zayıf ve tatsızdı (yavandı)."
  },
  {
    "word": "Insolent",
    "type": "adjective",
    "turkish": "Küstah, saygısız",
    "example": "The insolent boy refused to apologize.",
    "turkishExample": "Küstah çocuk özür dilemeyi reddetti."
  },
  {
    "word": "Insolvent",
    "type": "adjective",
    "turkish": "Müflis, borcunu ödeyemeyen, iflas etmiş",
    "example": "The company was declared insolvent.",
    "turkishExample": "Şirket müflis (iflas etmiş) ilan edildi."
  },
  {
    "word": "Instigate",
    "type": "verb",
    "turkish": "Kışkırtmak, önayak olmak, başlatmak (kötü bir şeyi)",
    "example": "He was accused of instigating the riot.",
    "turkishExample": "İsyanı kışkırtmakla (başlatmakla) suçlandı."
  },
  {
    "word": "Insular",
    "type": "adjective",
    "turkish": "Dar görüşlü, dünyaya kapalı, adaya özgü",
    "example": "The community has a very insular attitude.",
    "turkishExample": "Topluluğun dünyaya kapalı (dar görüşlü) bir tavrı var."
  },
  {
    "word": "Insurmountable",
    "type": "adjective",
    "turkish": "Başa çıkılamaz, yenilemez, üstesinden gelinemez",
    "example": "The Two companies faced insurmountable difficulties.",
    "turkishExample": "İki şirket üstesinden gelinemez zorluklarla karşılaştı."
  },
  {
    "word": "Intangible",
    "type": "adjective",
    "turkish": "Somut olmayan, elle tutulamaz, manevi",
    "example": "Trust is an intangible asset.",
    "turkishExample": "Güven somut olmayan (manevi) bir varlıktır."
  },
  {
    "word": "Integral",
    "type": "adjective",
    "turkish": "Tamamlayıcı, bütünleyici, ayrılmaz",
    "example": "Teamwork is an integral part of the job.",
    "turkishExample": "Ekip çalışması işin ayrılmaz (bütünleyici) bir parçasıdır."
  },
  {
    "word": "Integrity",
    "type": "noun",
    "turkish": "Dürüstlük, bütünlük, onur",
    "example": "He is a man of great integrity.",
    "turkishExample": "O büyük dürüstlük (onur) sahibi bir adamdır."
  },
  {
    "word": "Intelligible",
    "type": "adjective",
    "turkish": "Anlaşılır, net",
    "example": "The instructions were not easily intelligible.",
    "turkishExample": "Talimatların anlaşılması pek kolay değildi."
  },
  {
    "word": "Intermittent",
    "type": "adjective",
    "turkish": "Aralıklı, kesintili",
    "example": "There were intermittent showers throughout the day.",
    "turkishExample": "Gün boyunca aralıklı sağanak yağışlar oldu."
  },
  {
    "word": "Intractable",
    "type": "adjective",
    "turkish": "İnatçı, zorlu, söz dinlemez",
    "example": "The problem proved to be intractable.",
    "turkishExample": "Sorunun zorlu (inatçı) olduğu ortaya çıktı."
  },
  {
    "word": "Intransigent",
    "type": "adjective",
    "turkish": "Uzlaşmaz, katı, inatçı",
    "example": "The government remained intransigent in its refusal to negotiate.",
    "turkishExample": "Hükümet müzakere etmeyi reddetme konusunda uzlaşmaz (katı) kaldı."
  },
  {
    "word": "Intrepid",
    "type": "adjective",
    "turkish": "Korkusuz, yiğit, gözü pek",
    "example": "An intrepid explorer.",
    "turkishExample": "Korkusuz (gözü pek) bir kaşif."
  },
  {
    "word": "Intrinsic",
    "type": "adjective",
    "turkish": "Özünde olan, esas, hakiki",
    "example": "Good health has an intrinsic value.",
    "turkishExample": "İyi sağlığın esas (hakiki) bir değeri vardır."
  },
  {
    "word": "Inundate",
    "type": "verb",
    "turkish": "Su basmak, boğmak, istila etmek (istek vb. ile)",
    "example": "We were inundated with complaints.",
    "turkishExample": "Şikayet yağmuruna tutulduk (şikayetlerle boğulduk)."
  },
  {
    "word": "Inure",
    "type": "verb",
    "turkish": "Alıştırmak, kanıksatmak (zorluklara vb.)",
    "example": "The soldiers were inured to the hardships of war.",
    "turkishExample": "Askerler savaşın zorluklarına alışmışlardı (kanıksamışlardı)."
  },
  {
    "word": "Invalidate",
    "type": "verb",
    "turkish": "Geçersiz kılmak, iptal etmek, çürütmek",
    "example": "The new findings invalidate the previous theory.",
    "turkishExample": "Yeni bulgular önceki teoriyi çürütüyor (geçersiz kılıyor)."
  },
  {
    "word": "Invective",
    "type": "noun",
    "turkish": "Sövüp sayma, ağır eleştiri, hakaret",
    "example": "The speech was full of invective against the government.",
    "turkishExample": "Konuşma hükümete karşı ağır eleştirilerle (sövüp saymalarla) doluydu."
  },
  {
    "word": "Inveigle",
    "type": "verb",
    "turkish": "Kandırmak, baştan çıkarmak, ikna etmek (hileyle)",
    "example": "She managed to inveigle him into coming to the party.",
    "turkishExample": "Onu partiye gelmeye kandırmayı (ikna etmeyi) başardı."
  },
  {
    "word": "Inveterate",
    "type": "adjective",
    "turkish": "Kemikleşmiş, köklü, alışkanlık haline gelmiş",
    "example": "He is an inveterate liar.",
    "turkishExample": "O köklü (kemikleşmiş) bir yalancıdır."
  },
  {
    "word": "Invidious",
    "type": "adjective",
    "turkish": "Nefret uyandırıcı, haksız, incitici",
    "example": "It was an invidious task to choose between the Two candidates.",
    "turkishExample": "İki aday arasında seçim yapmak nahoş (incitici) bir görevdi."
  },
  {
    "word": "Irascible",
    "type": "adjective",
    "turkish": "Çabuk öfkelenen, asabi, barut gibi",
    "example": "His irascible temper made him difficult to work with.",
    "turkishExample": "Asabi mizacı onunla çalışmayı zorlaştırıyordu."
  },
  {
    "word": "Irksome",
    "type": "adjective",
    "turkish": "Bıktırıcı, can sıkıcı, yorucu",
    "example": "The long journey was very irksome.",
    "turkishExample": "Uzun yolculuk çok bıktırıcıydı (can sıkıcıydı)."
  },
  {
    "word": "Irrelevant",
    "type": "adjective",
    "turkish": "İlgisiz, yersiz, konu dışı",
    "example": "Your point is completely irrelevant to the discussion.",
    "turkishExample": "Senin görüşün tartışmayla tamamen ilgisiz (konu dışı)."
  },
  {
    "word": "Irreproachable",
    "type": "adjective",
    "turkish": "Kusursuz, tertemiz, kınanamaz",
    "example": "His conduct was irreproachable.",
    "turkishExample": "Davranışları kusursuzdu (kınanacak bir yeri yoktu)."
  }
];