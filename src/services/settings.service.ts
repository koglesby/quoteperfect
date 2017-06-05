export class SettingsService {

  private altBg = false;

  onToggleBg(isAlt: boolean) {
    this.altBg = isAlt;
  }

  isAltBg() {
    return this.altBg;
  }
}