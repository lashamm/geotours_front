import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService, LangCode } from '../../services/language.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  language: LangCode = 'en';

  form = { firstName: '', lastName: '', email: '', message: '' };
  submitted = false;

  constructor(private ls: LanguageService) {
    effect(() => { this.language = this.ls.lang(); });
  }

  onSubmit() {
    emailjs.send('service_id', 'template_id', {
      from_name: `${this.form.firstName} ${this.form.lastName}`,
      from_email: this.form.email,
      message: this.form.message,
    }, 'your_public_key');
    this.submitted = true;
  }

  reset() {
    this.form = { firstName: '', lastName: '', email: '', message: '' };
    this.submitted = false;
  }

  get t() {
    const map: Record<LangCode, {
      label: string; title: string; sub: string;
      firstName: string; lastName: string; email: string; message: string;
      send: string; success: string; successSub: string; another: string;
      phone: string; whatsapp: string; viber: string;
    }> = {
      en: {
        label: 'Get In Touch', title: 'Contact Us',
        sub: 'VIP comfort, safety and reliability — together with Vardotour. Contact us 24/7.',
        firstName: 'First Name', lastName: 'Last Name',
        email: 'Email Address', message: 'Your Message', send: 'Send Message',
        success: 'Message Prepared!',
        successSub: 'Your email client opened — send it to complete your enquiry.',
        another: 'Send Another', phone: 'Phone', whatsapp: 'WhatsApp', viber: 'Viber',
      },
      geo: {
        label: 'დაგვიკავშირდით', title: 'დაგვიკავშირდით',
        sub: 'VIP კომფორტი, უსაფრთხოება და სანდოობა — ერთად Vardotour-თან. დაგვიკავშირდით 24/7.',
        firstName: 'სახელი', lastName: 'გვარი',
        email: 'ელფოსტა', message: 'შეტყობინება', send: 'გაგზავნა',
        success: 'შეტყობინება მზადაა!',
        successSub: 'თქვენი ელფოსტის კლიენტი გაიხსნა. გაგზავნეთ შეტყობინება.',
        another: 'სხვა შეტყობინება', phone: 'ტელეფონი', whatsapp: 'WhatsApp', viber: 'Viber',
      },
      ru: {
        label: 'Свяжитесь с нами', title: 'Контакты',
        sub: 'VIP комфорт, безопасность и надёжность — вместе с Vardotour. Свяжитесь с нами 24/7.',
        firstName: 'Имя', lastName: 'Фамилия',
        email: 'Email', message: 'Сообщение', send: 'Отправить',
        success: 'Сообщение готово!',
        successSub: 'Ваш почтовый клиент открылся. Отправьте сообщение.',
        another: 'Другое сообщение', phone: 'Телефон', whatsapp: 'WhatsApp', viber: 'Viber',
      },
      ar: {
        label: 'تواصل معنا', title: 'اتصل بنا',
        sub: 'راحة VIP والسلامة والموثوقية — مع فاردوتور. تواصل معنا 24/7.',
        firstName: 'الاسم الأول', lastName: 'اسم العائلة',
        email: 'البريد الإلكتروني', message: 'رسالتك', send: 'إرسال',
        success: 'تم تجهيز الرسالة!',
        successSub: 'فُتح تطبيق البريد. أرسل الرسالة لإكمال استفسارك.',
        another: 'إرسال رسالة أخرى', phone: 'الهاتف', whatsapp: 'واتساب', viber: 'فايبر',
      },
      es: {
        label: 'Contáctanos', title: 'Contacto',
        sub: 'Comodidad VIP, seguridad y confiabilidad — con Vardotour. Contáctanos 24/7.',
        firstName: 'Nombre', lastName: 'Apellido',
        email: 'Correo electrónico', message: 'Tu mensaje', send: 'Enviar mensaje',
        success: '¡Mensaje preparado!',
        successSub: 'Tu cliente de correo se abrió. Envía el mensaje para completar tu consulta.',
        another: 'Enviar otro', phone: 'Teléfono', whatsapp: 'WhatsApp', viber: 'Viber',
      },
      fr: {
        label: 'Contactez-nous', title: 'Contact',
        sub: 'Confort VIP, sécurité et fiabilité — avec Vardotour. Contactez-nous 24h/24.',
        firstName: 'Prénom', lastName: 'Nom',
        email: 'Adresse email', message: 'Votre message', send: 'Envoyer',
        success: 'Message préparé !',
        successSub: "Votre client mail s'est ouvert. Envoyez le message pour finaliser.",
        another: 'Envoyer un autre', phone: 'Téléphone', whatsapp: 'WhatsApp', viber: 'Viber',
      },
      it: {
        label: 'Contattaci', title: 'Contatti',
        sub: 'Comfort VIP, sicurezza e affidabilità — con Vardotour. Contattaci 24/7.',
        firstName: 'Nome', lastName: 'Cognome',
        email: 'Email', message: 'Il tuo messaggio', send: 'Invia messaggio',
        success: 'Messaggio pronto!',
        successSub: 'Il tuo client email si è aperto. Invia il messaggio.',
        another: 'Invia un altro', phone: 'Telefono', whatsapp: 'WhatsApp', viber: 'Viber',
      },
      de: {
        label: 'Kontakt aufnehmen', title: 'Kontakt',
        sub: 'VIP-Komfort, Sicherheit und Zuverlässigkeit — mit Vardotour. Kontaktieren Sie uns 24/7.',
        firstName: 'Vorname', lastName: 'Nachname',
        email: 'E-Mail-Adresse', message: 'Ihre Nachricht', send: 'Nachricht senden',
        success: 'Nachricht bereit!',
        successSub: 'Ihr E-Mail-Client wurde geöffnet. Senden Sie die Nachricht.',
        another: 'Weitere senden', phone: 'Telefon', whatsapp: 'WhatsApp', viber: 'Viber',
      },
      zh: {
        label: '联系我们', title: '联系方式',
        sub: 'VIP舒适、安全与可靠——与Vardotour同行。24/7联系我们。',
        firstName: '名字', lastName: '姓氏',
        email: '电子邮件', message: '您的留言', send: '发送消息',
        success: '消息已准备好！',
        successSub: '您的邮件客户端已打开。发送消息即可完成您的询问。',
        another: '再次发送', phone: '电话', whatsapp: 'WhatsApp', viber: 'Viber',
      },
      tr: {
        label: 'Bize Ulaşın', title: 'İletişim',
        sub: 'VIP konfor, güvenlik ve güvenilirlik — Vardotour ile birlikte. 7/24 bize ulaşın.',
        firstName: 'Ad', lastName: 'Soyad',
        email: 'E-posta Adresi', message: 'Mesajınız', send: 'Mesaj Gönder',
        success: 'Mesaj Hazır!',
        successSub: 'E-posta istemciniz açıldı. Mesajı gönderin.',
        another: 'Başka Mesaj', phone: 'Telefon', whatsapp: 'WhatsApp', viber: 'Viber',
      },
    };
    return map[this.language];
  }
}
