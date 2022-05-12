const codonToAaObj: { [key: string]: string } = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP",
  }
  
  export const translate = (RNA: string): string[] => {
    const translatedRNAString = [...RNA.matchAll(/([AUGC]{3})/g)].map(
      codon => codonToAaObj[codon[0]]
    )
    return translatedRNAString.indexOf("STOP") !== -1
      ? translatedRNAString.slice(0, translatedRNAString.indexOf("STOP"))
      : translatedRNAString
  }
  