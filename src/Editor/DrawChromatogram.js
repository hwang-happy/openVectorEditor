import React from 'react'
import ab1Parsed from '../ToolBar/ab1Parsed.json'
import RowItem from '../RowItem'



export default class DrawChromatogram extends React.Component {
  
  
  render () {
    // const {} = this.props
  
    return (
        <div> chromatogram here
          <RowItem {...{
            chromatogramData: ab1Parsed,
            row: {
              start: 0,
              end: 1344,
              sequence: "NANTCTATAGGCGAATTCGAGCTCGGTACCCGGGGATCCTCTAGAGTCGACCTGCAGGCATGCAAGCTTGAGTATTCTATAGTGTCACCTAAATAGCTTGGCGTAATCATGGTCATAGCTGTTTCCTGTGTGAAATTGTTATCCGCTCACAATTCCACACAACATACGAGCCGGAAGCATAAAGTGTAAAGCCTGGGGTGCCTAATGAGTGAGCTAACTCACATTAATTGCGTTGCGCTCACTGCCCGCTTTCCAGTCGGGAAACCTGTCGTGCCAGCTGCATTAATGAATCGGCCAACGCGCGGGGAGAGGCGGTTTGCGTATTGGGCGCTCTTCCGCTTCCTCGCTCACTGACTCGCTGCGCTCGGTCGTTCGGCTGCGGCGAGCGGTATCAGCTCACTCAAAGGCGGTAATACGGTTATCCACAGAATCAGGGGATAACGCAGGAAAGAACATGTGAGCAAAAGGCCAGCAAAAGGCCAGGAACCGTAAAAAGGCCGCGTTGCTGGCGTTTTTCCATAGGCTCCGCCCCCCTGACGAGCATCACAAAAATCGACGCTCAAGTCAGAGGTGGCGAAACCCGACAGGACTATAAAGATACCAGGCGTTTCCCCCTGGAAGCTCCCTCGTGCGCTCTCCTGTTCCGACCCTGCCGCTTACCGGATACCTGTCCGCCTTTCTCCCTTCGGGAAGCGTGGCGCTTTCTCATAGCTCACGCTGTAGGTATCTCAGTTCGGTGTAGGTCGTTCGCTCCAAGCTGGGCTGTGTGCACGAACCCCCCGTTCAGCCCGACCGCTGCGCCTTATCCGGTAACTATCGTCTTGAGTCCAACCCGGTAAGACACGACTTATCGCCACTGGCAGCAGCCACTGGTAACAGGATTAGCAGAGCGAGGTATGTAGGCGGTGCTACAGAGTTCTTGAAGTGGTGGCCTAACTACGGCTACACTAGAAGAACAGTATTTGGTATCTGCGCTCTGCTGAAGCCAGTTACCTTCGGAAAAAGAGTTGGTAGCTCTNGATCCGGCAACAACCACCGCTGGTAGCGGNGGTTTTTTGTTNGCAAGCAGCANATTACNCNCAAAAAAAAANGATCTCAANAAAATCCTTNGATNTTTTNNACGGGGNCTGACNCTNAGGGNAAAAAAACTCCCNTTAAGGGATTTNGNCNTGAANTTTNAAAAAGANNTTNCCCNAAAACNNTTNAATTAAAAAAANNTTTAAACNNCCNAAAAATTTNNAAAAAATTGNGGGGAANNNCCAGGNTTTNNTNGGGGGGCCCTNCCCCNNNGGGGTTTTTTTNCCCAAANGNGGCCCCCCCCCNGGNAAAAAAAANAANNGGGGNN"
            }
          }}>

          </RowItem>
          
        </div>


    )
  }
}

// console.log('ab1Parsed:',ab1Parsed)
