// # Nucleotide Count
// ******************

// The genetic language of every living thing on the planet is DNA.
// DNA is a large molecule that is built from an extremely long sequence of individual elements called nucleotides.
// 4 types exist in DNA and these differ only slightly and can be represented as the following symbols: 'A' for adenine, 'C' for cytosine, 'G' for guanine, and 'T' thymine.

// Here is an analogy:
// - twigs are to birds nests as
// - nucleotides are to DNA as
// - legos are to lego houses as
// - words are to sentences as...
// *******************************

export class NucleotideCounts {
  static parse(strand) {
    if (strand.match(/[^ACTG]/)) throw new Error("Invalid nucleotide in strand")
    let nucleotideObj = { A: 0, C: 0, G: 0, T: 0 }
    for (const nucleotide of strand) {
      nucleotideObj[nucleotide] += 1
    }
    return Object.values(nucleotideObj).join(" ")
  }
}
