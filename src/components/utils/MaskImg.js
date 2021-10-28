import Aranha from '../../assets/img/receitas/aranha.jpg'
import Arroz from '../../assets/img/receitas/arroz-feijao.jpg'
import Casamento from '../../assets/img/receitas/bolo de casamento.jpg'
import BoloCenoura from '../../assets/img/receitas/bolo de cenoura.jpg'
import Carbonara from '../../assets/img/receitas/carbonara.png'
import ChocolateQuente from '../../assets/img/receitas/chocolate_quente.jpg'
import Coxinha from '../../assets/img/receitas/coxinha.jpg'
import FrangoKFC from '../../assets/img/receitas/frango do kfc.jpg'
import Limonada from '../../assets/img/receitas/limonada.jpg'
import Linguica from '../../assets/img/receitas/linguiça.jpg'
import AlhoOleo from '../../assets/img/receitas/macarrao-alho-oleo.jpg'
import Martini from '../../assets/img/receitas/martini.jpg'
import Mumia from '../../assets/img/receitas/mumias de salhicha.jpg'
import OvoPascoa from '../../assets/img/receitas/ovo de pasoa.jpg'
import Pacoca from '../../assets/img/receitas/paçoa.jpeg'
import PaoAlho from '../../assets/img/receitas/pao de alho.jpg'
import Pave from '../../assets/img/receitas/pavê.jpg'
import Peru from '../../assets/img/receitas/peru-de-natal.jpg'
import Picanha from '../../assets/img/receitas/picanha.jpeg'
import Salmao from '../../assets/img/receitas/salmao.jpg'


const MaskImg = ({id}) => {
    let caminho = 'temp'
    switch(id){
        case 1:
            caminho = BoloCenoura
        break
        case 2:
            caminho = ChocolateQuente
        break
        case 3:
            caminho = Peru
        break
        case 4:
            caminho = Carbonara
        break
        case 6:
            caminho = OvoPascoa
        break
        case 7:
            caminho = Pave
        break
        case 8:
            caminho = Pacoca
        break
        case 9:
            caminho = Arroz
        break
        case 10:
            caminho = Mumia
        break
        case 11:
            caminho = Aranha
        break
        case 12:
            caminho = PaoAlho
        break
        case 13:
            caminho = Picanha
        break
        case 14:
            caminho = Linguica
        break
        case 15:
            caminho = Limonada
        break
        case 16:
            caminho = Salmao
        break
        case 18:
            caminho = AlhoOleo
        break
        case 19:
            caminho = Coxinha
        break
        case 20:
            caminho = Martini
        break
        case 21:
            caminho = Casamento
        break
        case 22:
            caminho = FrangoKFC
        break
            
    }
    return (<img className="image-box" src={caminho} alt="Houve um erro ao carregar a imagem"/>)
}


export default MaskImg;