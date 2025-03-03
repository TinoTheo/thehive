import Controller from '@ember/controller';

export default class ContactController extends Controller {
  location = {
    address: '123 Medical Parkway',
    city: 'Healthville',
    state: 'CA',
    zip: '90210',
  };

  contact = {
    phone: '(555) 123-4567',
    emergency: '(555) 987-6543',
  };

  hours = [
    { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33803.46299192794!2d28.168091226498714!3d-25.74665121468407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95621194e6c743%3A0x38fdf453593b01e2!2sPTA%20WOMENS%20CLINIC!5e1!3m2!1sen!2sza!4v1738065947485!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  handleSubmit(event) {
    event.preventDefault();
    // Add form submission logic
  }
}
