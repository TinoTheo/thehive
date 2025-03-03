import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FloatingChat extends Component {
    @tracked isOpen = false;
    @tracked newMessage = '';
    @tracked messages = [];
    @tracked unreadCount = 0;
  
    @action
    toggleChat() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) this.unreadCount = 0;
    }
  
    @action
    updateMessage(event) {
      this.newMessage = event.target.value;
    }
  
    @action
    handleKeyPress(event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        this.sendMessage();
      }
    }
  
    @action
    sendMessage() {
      if (!this.newMessage.trim()) return;
  
      // Add user message
      this.messages = [
        ...this.messages,
        {
          type: 'outgoing',
          text: this.newMessage,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ];
  
      // Simulate auto-response
      setTimeout(() => {
        this.messages = [
          ...this.messages,
          {
            type: 'incoming',
            text: 'Thank you for your message. We\'ll connect you to WhatsApp now...',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ];
        this.openWhatsApp();
      }, 1500);
  
      this.newMessage = '';
    }
  
    openWhatsApp() {
      const message = encodeURIComponent(this.messages.find(m => m.type === 'outgoing')?.text || '');
      window.open(`https://wa.me/2731458566?text=${message}`, '_blank');
      this.isOpen = false;
    }   
}
