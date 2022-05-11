interface nucleotidePairs {
    [nucleotide: string]: string
  }
  
  const dnaToRnaNucleotidePairs: nucleotidePairs = {
    C: "G",
    G: "C",
    A: "U",
    T: "A",
  }
  
  export const toRna = (DNA: string): string =>
    DNA.split("")
      .map((nucleotide) => {
        if (!dnaToRnaNucleotidePairs[nucleotide]) throw new Error("Invalid input DNA.")
        return dnaToRnaNucleotidePairs[nucleotide]
      })
      .join("")
  