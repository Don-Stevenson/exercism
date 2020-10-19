// # RNA Transcription

// Given a DNA strand, return its RNA complement (per RNA transcription).

// Both DNA and RNA strands are a sequence of nucleotides.

// The four nucleotides found in DNA are adenine (**A**), cytosine (**C**),
// guanine (**G**) and thymine (**T**).

// The four nucleotides found in RNA are adenine (**A**), cytosine (**C**),
// guanine (**G**) and uracil (**U**).

// Given a DNA strand, its transcribed RNA strand is formed by replacing
// each nucleotide with its complement:
//
// nucleotide info as follows
// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`
// 
//*********************************************

const DnaToRna = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };
  
const toRna = DNA =>
    DNA.split("")
      .map(nucleotide => DnaToRna[nucleotide])
      .join("");

console.log(toRna("CGTA"))