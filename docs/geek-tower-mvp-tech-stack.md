# GeekTower - Kullanılacak Kütüphaneler Teknik Dökümanı (MVP)

## 1. Core Kütüphaneler (Altyapı ve Stabilite için)

| Kütüphane                      | Açıklama                                                                                        |
| :----------------------------- | :---------------------------------------------------------------------------------------------- |
| react-native-gesture-handler   | Tüm gesture (kaydırma, dokunma vb.) olaylarını doğru yönetmek için.                             |
| react-native-reanimated        | Performanslı ve native seviyede animasyonlar için. Özellikle katlar arası geçişler için kritik. |
| react-native-screens           | Navigation stack ekranlarını daha performanslı hale getirmek için.                              |
| react-native-safe-area-context | Çentikli telefonlar için güvenli alan ayarlamaları (iPhone X ve sonrası için).                  |
| @react-navigation/native       | Navigation sistemi için temel kütüphane.                                                        |
| @react-navigation/stack        | Stack bazlı navigation yönetimi (katlar arası geçişler dahil).                                  |
| @react-navigation/bottom-tabs  | Alt menü kullanımı (ileride gerekirse).                                                         |

## 2. State Management ve Local Storage

| Kütüphane                                 | Açıklama                                                                               |
| :---------------------------------------- | :------------------------------------------------------------------------------------- |
| @react-native-async-storage/async-storage | Kullanıcı token'ı, küçük cache verilerini localde tutmak için.                         |
| React Context API                         | Kullanıcı oturumu, arkadaş listesi, chat listesi gibi verilerin merkezi yönetimi için. |

## 3. UI & Tasarım Kütüphaneleri

| Kütüphane                 | Açıklama                                                                  |
| :------------------------ | :------------------------------------------------------------------------ |
| react-native-paper        | Basit ve hızlı UI komponentleri (buton, kart, input vs.).                 |
| react-native-svg          | Kule animasyonlarında veya özel ikonlarda SVG kullanımı için destek.      |
| react-native-vector-icons | İkon kullanımı için standart kütüphane (FontAwesome, Material Icons vs.). |

## 4. Animasyon ve Katlar Arası Geçişler (Özel Araştırılacak Alan)

| Kütüphane               | Açıklama                                                                                     |
| :---------------------- | :------------------------------------------------------------------------------------------- |
| react-native-reanimated | Native performanslı animasyonlar (kat geçişleri için ana kütüphane).                         |
| react-native-redash     | Reanimated 2 için yardımcı fonksiyonlar (daha temiz animasyon kodları yazmak için önerilir). |
| moti                    | Üst düzey animasyon kolaylaştırıcı (Reanimated tabanlı, hızlı prototipleme için).            |
| framer-motion (Web)     | Web destekli projelerde güçlü animasyon çözümü. (Şu anda opsiyonel.)                         |

## 5. Backend ve Bildirim Kütüphaneleri

| Kütüphane                        | Açıklama                                                                  |
| :------------------------------- | :------------------------------------------------------------------------ |
| @react-native-firebase/app       | Firebase konfigürasyonunun temel modülü.                                  |
| @react-native-firebase/auth      | Firebase kimlik doğrulama (E-mail/Şifre, Google, Apple girişleri).        |
| @react-native-firebase/firestore | Kullanıcı, arşiv, sohbet, arkadaşlık gibi verilerin tutulduğu veritabanı. |
| @react-native-firebase/storage   | Kullanıcı avatarları gibi medya dosyaları için.                           |
| @react-native-firebase/messaging | Push bildirimleri (arkadaşlık isteği, öneri bildirimi vs.) için.          |

> **Not:** Tüm backend işlemleri artık Firebase ile yönetilecektir. Supabase tamamen kaldırılmıştır.

## 6. Ekstra Faydalı Araçlar (Opsiyonel Ama Tavsiye Edilenler)

| Kütüphane                  | Açıklama                                                         |
| :------------------------- | :--------------------------------------------------------------- |
| react-hook-form            | Giriş/Kayıt form ekranlarında kolay validasyon ve form yönetimi. |
| yup                        | Form validation için şema tabanlı doğrulama.                     |
| react-native-toast-message | Kullanıcıya toast tipi bildirim göstermek için.                  |
| expo-image-picker          | Kullanıcının profil resmi seçebilmesi için.                      |
| expo-file-system           | Dosya indirme/yükleme işlemleri için destek. (Opsiyonel.)        |

---

# 📌 Özet Kategori Listesi

- **Core:** Gesture-handler, Reanimated, Navigation, SafeArea.
- **State/Storage:** Async Storage, Context API.
- **UI:** Paper, Vector Icons, SVG.
- **Animation:** Reanimated + Redash + Moti.
- **Backend:** Firebase Auth, Firestore, Storage, Messaging.
- **Opsiyonel Destek:** react-hook-form, yup, toast-message.

---
