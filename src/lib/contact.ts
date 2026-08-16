export const WHATSAPP_URL =
  createWhatsAppUrl(
    "Halo Daru, saya tertarik ngobrol soal project digital. Bisa diskusi?"
  );

export function createWhatsAppUrl(message: string) {
  return "https://wa.me/62813111506025?text=" + encodeURIComponent(message);
}

export const EMAIL_ADDRESS = "daru.fahma@gmail.com";
