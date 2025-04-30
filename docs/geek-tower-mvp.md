# GeekTower - Uygulama Genel Dokümanı

Bu doküman, GeekTower mobil uygulamasının vizyonunu, temel kullanıcı akışlarını ve ana sistem yapılarını anlatmak amacıyla oluşturulmuştur.

> 📅 Bu dosya **yaşayan bir dokümandır**. Uygulama geliştirildikçe yeni bölümler ve başlıklar eklenerek güncellenecektir.

> ℹ️ Not: Bu doküman MVP seviyesindeki ana sistemleri kapsar. İlerleyen aşamalarda detaylı "Feature Dökümanı" oluşturulacak ve yeni eklenen özellikler orada tanımlanacaktır.

---

# 1. Tower (Kule) Mantığı

**Amaç:**  
Kullanıcıların izledikleri yapımları arşivlerine ekleyerek puan kazanmaları ve bu puanlar ile GeekTower içinde kat atlayarak ilerlemeleri.

**Ana Akış:**

- Kullanıcı, hesap oluşturup uygulamaya girer ve **Zemin Kat**'tan başlar.
- Kullanıcı **film, dizi, anime, oyun, kitap** gibi yapımları arşivine ekler.
- Her eklenen yapım kullanıcıya **puan** kazandırır.
- Toplanan puanlar ile kullanıcı **kulede kat atlar**.

**Kule Yapısı:**

- GeekTower **tek büyük bir kule** şeklinde tasarlanmıştır.
- Katlar kendi içinde **bölümler** barındırır:
  - Film Bölümü
  - Anime Bölümü
  - Oyun Bölümü
  - Dizi Bölümü
  - Kitap Bölümü
- Kullanıcının izlediği veya okuduğu yapım türüne göre hangi bölümde ilerleyeceği belirlenir.
- Kullanıcı istediği zaman bölüm değiştirebilir.

**Puanlama Sistemi (MVP Sürüm):**

- Film: +10 puan
- Dizi sezonu: +20 puan
- Anime sezonu: +20 puan
- Bitirilmiş oyun: +30 puan
- Mini-seri: +15 puan
- Okunmuş kitap: +15 puan

**Kat Atlama Sistemi:**

- Her **100 puanda** bir kat atlama.
- Belirli katlarda rozetler ve özel ödül sistemleri planlanabilir.

**Anti-Sahtecilik:**

- Şu anki MVP aşamasında özel bir doğrulama zorunlu değil.
- Kullanıcıların gerçek içerik eklemesi beklenecek.
- İlerleyen dönemlerde yorum ekleme veya basit quiz tabanlı onay sistemleri entegre edilebilir.

---

# 2. Tower Chat (Kule Sohbet) Mantığı

**Amaç:**  
Kullanıcıların bulundukları katta birbirleriyle sohbet etmeleri ve sosyal etkileşimi artırmaları.

**Ana Akış:**

- Her kat için ayrı bir **sohbet odası** bulunur.
- Aynı katta bulunan tüm kullanıcılar o kattaki sohbet odasında yazışabilir.

**Profil Görüntüleme:**

- Sohbet odasında kullanıcı üzerine tıklanınca profiline gidilir.
- Arşivi **public** ise izlediği yapımlar listelenir.

**Mesajlama Kuralları (MVP Sürüm):**

- Yalnızca metin mesajları gönderilebilir.
- Sohbet mesajları Firestore üzerinde tutulur.
- 30 günden eski mesajlar otomatik silinebilir.

**Public Arşiv Ayarı:**

- Kullanıcılar arşivlerini public veya private olarak ayarlayabilir.

---

# 3. Arkadaşlık Sistemi

**Amaç:**  
Kullanıcıların birbirleriyle daha derin sosyal bağlantılar kurmasını sağlamak.

**Ana Akış:**

- Kullanıcılar arkadaşlık isteği gönderebilir.
- Arkadaşlık kabul edilince:
  - Public olmasa bile arşivlere erişim sağlanır.
  - Direct message (DM) ile mesajlaşma açılır.
- Arkadaşlar birbirlerinin arşivlerindeki yapımlara yorum bırakabilir.

**Gelişim Fikri:**

- İleride grup sistemi ile birlikte kule tırmanma planlanabilir.

---

# 4. Profil Sistemi

**Amaç:**

- Kullanıcıların kendi bilgilerini ve ilerlemelerini görüntülemesi.

**İçerik:**

- Kullanıcı adı
- Avatar
- Kule seviyesi (kaçıncı kat)
- Toplam puan
- Kısa biyografi

---

# 5. Arşiv Yönetimi

**Amaç:**

- Kullanıcıların ekledikleri yapımları yönetebilmesi.

**İşlevler:**

- Arşivden yapım silme
- Yapım bilgisi düzenleme
- İçeriğe kişisel not veya yorum ekleyebilme

---

# 6. Bildirim Sistemi

**Amaç:**

- Kullanıcıların önemli olaylardan haberdar edilmesi.

**İşlevler:**

- Arkadaşlık isteği gönderildiğinde bildirim
- Arkadaşlık kabul edildiğinde bildirim

---

# 7. Kullanıcı Arama

**Amaç:**

- Kullanıcıların diğer kullanıcıları bulabilmesi.

**İşlevler:**

- Kullanıcı adına göre arama yapma
- Arama sonuçlarından arkadaşlık isteği gönderme

---

# 8. Giriş Yöntemleri

**Amaç:**

- Kullanıcı kayıt ve giriş işlemlerini sağlamak.

**İşlevler:**

- E-mail/Şifre ile giriş
- Google Authentication
- Apple Authentication (iOS için gerekli)

**Misafir Girişi:**

- MVP aşamasında desteklenmeyecek.
- İleride kullanıcı deneyimi ve mağaza politikaları doğrultusunda değerlendirilebilir.

---

# 9. Gelişime Açık Bölümler (Eğitim, Yapay Zeka, Rozetler vb.)

İlerleyen sürümlerde planlanan başlıca özellikler:

- Yapay Zeka Tavsiye Sistemi
- Rozetler ve Ödüller
- Premium Üyelik ve Özel Katlar
- Turnuvalar veya Sezonluk Etkinlikler
- Kullanıcı Gelişim Grafikleri
- İstatistikler ve Liderlik Tablosu

---

> 📚 Bu dosya GeekTower projesinin resmî "yaşayan dokümanı"dır ve geliştirme süreci boyunca düzenli olarak güncellenecektir.
