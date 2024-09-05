import { StyleSheet, Text } from "react-native"

export default Header = (props)=>{

    console.log(props);

    let cssCor = {backgroundColor: props.corFundo} 
    
    let cssTamanho = styles.TG;
    if (props.tamanho  === 'M'){
        cssTamanho = styles.TM;
    }else if (props.tamanho === 'P'){
        cssTamanho = styles.TP;
    }

    return(
        <Text style={[styles.texto, cssTamanho, cssCor]}>{props.titulo}</Text>
    )
}

const styles = StyleSheet.create({
    texto:{
        padding: 10,
        width: '100%',
        textAlign: 'center',
    },
    TG:{
        fontSize: 38,
    },
    TM:{
        fontSize: 32,
    },
    TP:{
        fontSize: 22,
    }
})