export class DnDCharacter {
    public static generateAbilityScore(): number {
      return Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1)
        .sort()
        .slice(1, 4)
        .reduce((a, b) => a + b, 0)
    }
  
    strength = DnDCharacter.generateAbilityScore()
    dexterity = DnDCharacter.generateAbilityScore()
    constitution = DnDCharacter.generateAbilityScore()
    intelligence = DnDCharacter.generateAbilityScore()
    wisdom = DnDCharacter.generateAbilityScore()
    charisma = DnDCharacter.generateAbilityScore()
  
    hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  
    public static getModifierFor(abilityValue: number): number {
      return Math.floor((abilityValue - 10) / 2)
    }
  }