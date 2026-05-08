import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LangCode } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {
  language: LangCode = 'en';

  form = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };

  submitted = false;

  ngOnInit() {
    const saved = localStorage.getItem('lang') as LangCode;
    if (saved) this.language = saved;
    window.addEventListener('lang-change', (e: Event) => {
      this.language = (e as CustomEvent<LangCode>).detail;
    });
  }

  onSubmit() {
    const name = `${this.form.firstName} ${this.form.lastName}`;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${this.form.email}\n\nMessage:\n${this.form.message}`
    );
    window.open(`mailto:vardo@vardotour.com?subject=${subject}&body=${body}`, '_blank');
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
      phone: string; whatsapp: string; location: string;
    }> = {
      en: {
        label: 'Get In Touch',
        title: 'Contact Us',
        sub: 'Send us a message and we\'ll get back to you as soon as possible.',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        message: 'Your Message',
        send: 'Send Message',
        success: 'Message Prepared!',
        successSub: 'Your email client has opened with the message. Send it to complete your enquiry.',
        another: 'Send Another',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        location: 'Location',
      },
      geo: {
        label: 'დაგვიკავშირდით',
        title: 'კონტაქტი',
        sub: 'გამოგვიგზავნეთ შეტყობინება და ჩვენ დაგიკავშირდებით.',
        firstName: 'სახელი',
        lastName: 'გვარი',
        email: 'ელფოსტა',
        message: 'შეტყობინება',
        send: 'გაგზავნა',
        success: 'შეტყობინება მზადაა!',
        successSub: 'თქვენი ელფოსტის კლიენტი გაიხსნა. გაგზავნეთ შეტყობინება.',
        another: 'სხვა შეტყობინება',
        phone: 'ტელეფონი',
        whatsapp: 'WhatsApp',
        location: 'მდებარეობა',
      },
      ru: {
        label: 'Свяжитесь с нами',
        title: 'Контакты',
        sub: 'Напишите нам, и мы ответим как можно скорее.',
        firstName: 'Имя',
        lastName: 'Фамилия',
        email: 'Email',
        message: 'Сообщение',
        send: 'Отправить',
        success: 'Сообщение готово!',
        successSub: 'Ваш почтовый клиент открылся. Отправьте сообщение.',
        another: 'Другое сообщение',
        phone: 'Телефон',
        whatsapp: 'WhatsApp',
        location: 'Локация',
      },
      ar: {
        label: 'تواصل معنا',
        title: 'اتصل بنا',
        sub: 'أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.',
        firstName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        email: 'البريد الإلكتروني',
        message: 'رسالتك',
        send: 'إرسال',
        success: 'تم تجهيز الرسالة!',
        successSub: 'فُتح تطبيق البريد الإلكتروني. أرسل الرسالة لإكمال استفسارك.',
        another: 'إرسال رسالة أخرى',
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        location: 'الموقع',
      },
      es: {
        label: 'Contáctanos',
        title: 'Contacto',
        sub: 'Envíanos un mensaje y te responderemos a la brevedad.',
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo electrónico',
        message: 'Tu mensaje',
        send: 'Enviar mensaje',
        success: '¡Mensaje preparado!',
        successSub: 'Tu cliente de correo se abrió. Envía el mensaje para completar tu consulta.',
        another: 'Enviar otro',
        phone: 'Teléfono',
        whatsapp: 'WhatsApp',
        location: 'Ubicación',
      },
      fr: {
        label: 'Contactez-nous',
        title: 'Contact',
        sub: 'Envoyez-nous un message et nous vous répondrons dès que possible.',
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Adresse email',
        message: 'Votre message',
        send: 'Envoyer',
        success: 'Message préparé !',
        successSub: 'Votre client mail s\'est ouvert. Envoyez le message pour finaliser.',
        another: 'Envoyer un autre',
        phone: 'Téléphone',
        whatsapp: 'WhatsApp',
        location: 'Localisation',
      },
      it: {
        label: 'Contattaci',
        title: 'Contatti',
        sub: 'Inviaci un messaggio e ti risponderemo il prima possibile.',
        firstName: 'Nome',
        lastName: 'Cognome',
        email: 'Email',
        message: 'Il tuo messaggio',
        send: 'Invia messaggio',
        success: 'Messaggio pronto!',
        successSub: 'Il tuo client email si è aperto. Invia il messaggio per completare la richiesta.',
        another: 'Invia un altro',
        phone: 'Telefono',
        whatsapp: 'WhatsApp',
        location: 'Posizione',
      },
      de: {
        label: 'Kontakt aufnehmen',
        title: 'Kontakt',
        sub: 'Schreib uns eine Nachricht und wir melden uns so schnell wie möglich.',
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail-Adresse',
        message: 'Ihre Nachricht',
        send: 'Nachricht senden',
        success: 'Nachricht bereit!',
        successSub: 'Ihr E-Mail-Client wurde geöffnet. Senden Sie die Nachricht.',
        another: 'Weitere senden',
        phone: 'Telefon',
        whatsapp: 'WhatsApp',
        location: 'Standort',
      },
      zh: {
        label: '联系我们',
        title: '联系方式',
        sub: '给我们发送消息，我们将尽快回复您。',
        firstName: '名字',
        lastName: '姓氏',
        email: '电子邮件',
        message: '您的留言',
        send: '发送消息',
        success: '消息已准备好！',
        successSub: '您的邮件客户端已打开。发送消息即可完成您的询问。',
        another: '再次发送',
        phone: '电话',
        whatsapp: 'WhatsApp',
        location: '地点',
      },
      tr: {
        label: 'Bize Ulaşın',
        title: 'İletişim',
        sub: 'Bize mesaj gönderin, en kısa sürede yanıt vereceğiz.',
        firstName: 'Ad',
        lastName: 'Soyad',
        email: 'E-posta Adresi',
        message: 'Mesajınız',
        send: 'Mesaj Gönder',
        success: 'Mesaj Hazır!',
        successSub: 'E-posta istemciniz açıldı. Mesajı göndererek talebinizi tamamlayın.',
        another: 'Başka Mesaj',
        phone: 'Telefon',
        whatsapp: 'WhatsApp',
        location: 'Konum',
      },
    };
    return map[this.language] ?? map['en'];
  }
}
