import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Balloon {
  id: number;
  x: number;
  y: number;
  color: string;
  popped: boolean;
  scale: number;
  delay: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  balloons: Balloon[] = [];
  poppedCount = 0;
  totalBalloons = 10;
  showQuestion = false;
  showSuccess = false;
  confettiPieces: any[] = [];
  showNoPopup = false;
  noClickCount = 0;
  showFinalScreen = false;
  
  noMessages = [
    "Are you sure? 🥺",
    "Think about it again, babygirl... 💕",
    "Please? I promise to make it special! 🌹",
    "My heart is breaking... 💔",
    "Just give me one chance? 🙏",
    "I'll bring you flowers every day! 🌸",
    "You're making Cupid cry... 😢",
    "What if I said pretty please? 🥹",
    "I've been practicing my love poems! 📝"
  ];

  ngOnInit() {
    this.generateBalloons();
  }

  generateBalloons() {
    const colors = ['#ff6b9d', '#c44569', '#f093fb', '#4facfe', '#43e97b', '#fa709a', '#fee140'];
    
    for (let i = 0; i < this.totalBalloons; i++) {
      this.balloons.push({
        id: i,
        x: Math.random() * 80 + 10, // 10% to 90% of screen width
        y: 100 + (i * 15), // Stagger starting positions
        color: colors[Math.floor(Math.random() * colors.length)],
        popped: false,
        scale: 0.8 + Math.random() * 0.4, // Random size between 0.8 and 1.2
        delay: i * 0.5 // Stagger animation delays
      });
    }
  }

  popBalloon(balloon: Balloon, event: MouseEvent | TouchEvent) {
    if (balloon.popped) return;

    balloon.popped = true;
    this.poppedCount++;

    // Create confetti at balloon position
    this.createConfetti(event);

    // Check if all balloons are popped
    if (this.poppedCount === this.totalBalloons) {
      setTimeout(() => {
        this.showQuestion = true;
      }, 500);
    }
  }

  createConfetti(event: MouseEvent | TouchEvent) {
    const x = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const y = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

    for (let i = 0; i < 15; i++) {
      const confetti = {
        id: Date.now() + i,
        x: x,
        y: y,
        color: ['#ff6b9d', '#f093fb', '#4facfe', '#43e97b', '#fee140'][Math.floor(Math.random() * 5)],
        angle: Math.random() * 360,
        velocity: 2 + Math.random() * 3
      };
      this.confettiPieces.push(confetti);

      // Remove confetti after animation
      setTimeout(() => {
        this.confettiPieces = this.confettiPieces.filter(c => c.id !== confetti.id);
      }, 1000);
    }
  }

  onYesClick() {
    this.showSuccess = true;
  }

  onNoClick() {
    this.showNoPopup = true;
  }

  onPopupNoClick() {
    this.noClickCount++;
    // After 9 clicks, force yes button to take over
    if (this.noClickCount >= this.noMessages.length) {
      this.showFinalScreen = true;
    }
  }

  getCurrentNoMessage(): string {
    if (this.noClickCount >= this.noMessages.length) {
      return this.noMessages[this.noMessages.length - 1];
    }
    return this.noMessages[this.noClickCount];
  }

  reset() {
    this.balloons = [];
    this.poppedCount = 0;
    this.showQuestion = false;
    this.showSuccess = false;
    this.confettiPieces = [];
    this.showNoPopup = false;
    this.noClickCount = 0;
    this.showFinalScreen = false;
    this.generateBalloons();
  }
}
