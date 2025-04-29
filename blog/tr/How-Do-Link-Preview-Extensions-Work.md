# Bağlantı Önizleme Uzantıları Nasıl Çalışır? Arkasındaki Teknolojiye Derinlemesine Bir Bakış

**Bağlantı önizleme uzantıları** neredeyse sihirli gibi görünüyor: Bir bağlantının üzerine geldiğinizde *puf*, içerik yeni bir sekme açmadan beliriyor. Ama aslında nasıl çalışıyorlar? Hızlıca tekniğin derinliklerine inelim.

Özünde, bir **tarayıcı bağlantı önizleme** aracının sizi tam olarak uzaklaştırmadan veya kaynak yoğun bir sekme açmadan bağlantılı bir URL'den içerik alması ve görüntülemesi gerekir. İşte basitleştirilmiş bir dökümü:

1.  **Tetikleyici Algılama:** Uzantı, tetikleme olaylarını sürekli olarak dinler. Genellikle bir köprünün üzerinde fareyle gezinme (**bağlantı üzerine gelince önizleme**) olur, ancak bazen bir tıklama veya klavye kısayolu da olabilir.
2.  **URL Getirme (Hafif):** Tetiklendiğinde, uzantı, tarayıcınızın normalde yapacağı gibi, hedef URL'ye bir istek gönderir. Ancak, genellikle *sadece* temel HTML içeriğini ister, bazen hızlandırmak için karmaşık komut dosyaları veya büyük resimler gibi daha ağır öğeleri başlangıçta yoksayar.
3.  **İçerik Ayıklama & Temizleme:** Alınan HTML ayrıştırılır. Uzantı, ana içeriği (metin, temel biçimlendirme, belki de önemli resimler) ayıklar ve genellikle *temizler*. Güvenliği sağlamak ve önizlemenin mevcut sayfayla etkileşimini önlemek için potansiyel olarak zararlı komut dosyalarını veya stilleri kaldırır.
4.  **Katmanlı Pencerede Görüntüleme:** Bu temizlenmiş içerik daha sonra geçici bir katmanlı pencereye (genellikle bir `iframe` veya bir `div` öğesi) mevcut sayfanızdaki bağlantının yakınına yerleştirilir. Bu, **mevcut sayfada bağlantıları önizlemenizi** sağlar.

![Bağlantı önizleme sürecinin şeması - kavramsal](images/notab1.png) <!-- Kavramsal resim -->

NoTab gibi uzantılar bu süreci geliştirerek şunları ekler:
*   **Okuyucu Modu:** Okunabilirlik için içeriği daha da işleme.
*   **Önbelleğe Alma:** Daha sonraki görüntülemeler için önizlemeleri geçici olarak saklama.
*   **Özelleştirme:** Kullanıcıların tetikleme yöntemlerini ve önizleme görünümünü kontrol etmesine izin verme.

![NoTab'ın arayüzü](images/notab2.png)

Bunu anlamak, bu araçların **açmadan web sitelerini önizlemenize** nasıl olanak tanıdığını, zamandan ve kaynaklardan nasıl tasarruf sağladığını anlamaya yardımcı olur. Sorunsuz bir **satır içi bağlantı önizlemesi** sunmak için web isteklerini akıllıca yönetir ve görüntülerler.

Bu teknolojiyi NoTab ile deneyimleyin: [https://notab.wand.tools/](https://notab.wand.tools/)
