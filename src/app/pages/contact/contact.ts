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
    emailjs.send('service_9lbdowb', 'template_ax41die', {
      from_name: `${this.form.firstName}`,
      from_email: `${this.form.email}`,
      message: `${this.form.firstName}: ${this.form.message}
      ${this.form.email}`,
    }, 'MC94kPW_O5CQDq4d4');
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
      phone: string; whatsapp: string; viber: string; telegram: string;
    }> = {
      en: {
        label: 'Get In Touch', title: 'Contact Us',
        sub: 'We are available 24/7. Write to us and we will reply as soon as possible.',
        firstName: 'First Name', lastName: 'Last Name',
        email: 'Email', message: 'Your Message', send: 'Send Message',
        success: 'Message Sent!',
        successSub: 'Thank you. We will get back to you soon.',
        another: 'Send Another', phone: 'Phone', whatsapp: 'WhatsApp', viber: 'Viber', telegram: 'Telegram',
      },
      geo: {
        label: 'დაგვიკავშირდით', title: 'კონტაქტი',
        sub: 'ჩვენ ხელმისაწვდომი ვართ 24/7. მოგვწერეთ და ჩვენ მალე გიპასუხებთ.',
        firstName: 'სახელი', lastName: 'გვარი',
        email: 'ელფოსტა', message: 'შეტყობინება', send: 'გაგზავნა',
        success: 'შეტყობინება გაიგზავნა!',
        successSub: 'გმადლობთ. ჩვენ მალე დაგიკავშირდებით.',
        another: 'სხვა შეტყობინება', phone: 'ტელეფონი', whatsapp: 'WhatsApp', viber: 'Viber', telegram: 'Telegram',
      },
      ru: {
        label: 'Свяжитесь с нами', title: 'Контакты',
        sub: 'Мы работаем 24/7. Напишите нам и мы ответим как можно скорее.',
        firstName: 'Имя', lastName: 'Фамилия',
        email: 'Email', message: 'Сообщение', send: 'Отправить',
        success: 'Сообщение отправлено!',
        successSub: 'Спасибо. Мы скоро ответим вам.',
        another: 'Написать ещё', phone: 'Телефон', whatsapp: 'WhatsApp', viber: 'Viber', telegram: 'Telegram',
      },
      ar: {
        label: 'تواصل معنا', title: 'اتصل بنا',
        sub: 'نحن متاحون 24/7. اكتب لنا وسنرد في أقرب وقت.',
        firstName: 'الاسم', lastName: 'اسم العائلة',
        email: 'البريد الإلكتروني', message: 'رسالتك', send: 'إرسال',
        success: 'تم إرسال الرسالة!',
        successSub: 'شكراً. سنتواصل معك قريباً.',
        another: 'إرسال رسالة أخرى', phone: 'الهاتف', whatsapp: 'واتساب', viber: 'فايبر', telegram: 'تيليغرام',
      },
      es: {
        label: 'Contáctanos', title: 'Contacto',
        sub: 'Estamos disponibles 24/7. Escríbenos y te respondemos lo antes posible.',
        firstName: 'Nombre', lastName: 'Apellido',
        email: 'Correo', message: 'Tu mensaje', send: 'Enviar',
        success: '¡Mensaje enviado!',
        successSub: 'Gracias. Te responderemos pronto.',
        another: 'Enviar otro', phone: 'Teléfono', whatsapp: 'WhatsApp', viber: 'Viber', telegram: 'Telegram',
      },
      fr: {
        label: 'Contactez-nous', title: 'Contact',
        sub: 'Nous sommes disponibles 24h/24. Écrivez-nous et nous répondrons dès que possible.',
        firstName: 'Prénom', lastName: 'Nom',
        email: 'Email', message: 'Votre message', send: 'Envoyer',
        success: 'Message envoyé !',
        successSub: 'Merci. Nous vous répondrons bientôt.',
        another: 'Envoyer un autre', phone: 'Téléphone', whatsapp: 'WhatsApp', viber: 'Viber', telegram: 'Telegram',
      },
      it: {
        label: 'Contattaci', title: 'Contatti',
        sub: 'Siamo disponibili 24/7. Scrivici e ti risponderemo al più presto.',
        firstName: 'Nome', lastName: 'Cognome',
        email: 'Email', message: 'Il tuo messaggio', send: 'Invia',
        success: 'Messaggio inviato!',
        successSub: 'Grazie. Ti risponderemo presto.',
        another: 'Invia un altro', phone: 'Telefono', whatsapp: 'WhatsApp', viber: 'Viber', telegram: 'Telegram',
      },
      de: {
        label: 'Kontakt', title: 'Kontakt',
        sub: 'Wir sind 24/7 erreichbar. Schreiben Sie uns und wir antworten so schnell wie möglich.',
        firstName: 'Vorname', lastName: 'Nachname',
        email: 'E-Mail', message: 'Ihre Nachricht', send: 'Senden',
        success: 'Nachricht gesendet!',
        successSub: 'Danke. Wir melden uns bald bei Ihnen.',
        another: 'Weitere senden', phone: 'Telefon', whatsapp: 'WhatsApp', viber: 'Viber', telegram: 'Telegram',
      },
      zh: {
        label: '联系我们', title: '联系方式',
        sub: '我们全天候24/7在线。给我们留言，我们会尽快回复。',
        firstName: '名字', lastName: '姓氏',
        email: '电子邮件', message: '您的留言', send: '发送',
        success: '消息已发送！',
        successSub: '谢谢。我们会尽快联系您。',
        another: '再次发送', phone: '电话', whatsapp: 'WhatsApp', viber: 'Viber', telegram: 'Telegram',
      },
      tr: {
        label: 'Bize Ulaşın', title: 'İletişim',
        sub: '7/24 hizmetinizdeyiz. Bize yazın, en kısa sürede yanıt verelim.',
        firstName: 'Ad', lastName: 'Soyad',
        email: 'E-posta', message: 'Mesajınız', send: 'Gönder',
        success: 'Mesaj gönderildi!',
        successSub: 'Teşekkürler. En kısa sürede size dönüş yapacağız.',
        another: 'Başka mesaj', phone: 'Telefon', whatsapp: 'WhatsApp', viber: 'Viber', telegram: 'Telegram',
      },
    };
    return map[this.language];
  }
}
