
// x inicial e y inicial do robo
function CalcularCaixaLargura() {
    let Amplitude = parseFloat(document.getElementById("CalcularOsNiveisDeEnergialarguraDaCaixa01").value);
    let nOnda = parseFloat(document.getElementById("CalcularOsNiveisDeEnergialarguraDaCaixa02").value);
    let posX = parseFloat(document.getElementById("CalcularOsNiveisDeEnergialarguraDaCaixa03").value);
    const protOuEle = document.querySelector("#protonOuEletron").value;
    const pi = Math.PI;

    let proton = 1.673e-27;
    let eletron = 9.101e-31;
    let massa;

    

    if (protOuEle == 1) {
        massa = proton;
    } else {
        massa = eletron;
    }

    // largura da caixa
    let Largura1 = (2 / (Amplitude ** 2));
    let Largura2 = (Largura1 * 1E9);

    const CalcularCaixaLargura0 = document.querySelector(".CalcularCaixaLargura0");
    CalcularCaixaLargura0.textContent = `Largura da caixa: ${Largura2.toExponential(3)} nm`;

    // nivel quantico da particula
    let NQuantico = ((nOnda * Largura1) / pi);

    const CalcularCaixaLargura1 = document.querySelector(".CalcularCaixaLargura1");
    CalcularCaixaLargura1.textContent = `Nível quantico da particula: ${Math.round(NQuantico)}`;

    // probabilidade
    let probabilidade = (Amplitude ** 2) * (Math.sin(nOnda * posX * Largura1) ** 2);

    const CalcularCaixaLargura2 = document.querySelector(".CalcularCaixaLargura2");
    CalcularCaixaLargura2.textContent = `Probabilidade de encontrar a partícula na posição xP: ${probabilidade.toExponential(3)}`;

    const respostaCalcularOsNiveisDeEnergiaElement = document.getElementById("respostaCalcularCaixaLargura");
    respostaCalcularOsNiveisDeEnergiaElement.style.display = "block";
}





function CalcularEnergiaNivelQuantico() {
    let larguraDaCaixa = parseFloat(document.getElementById("CalcularEnergiaDoNivelQuanLarguraDaCaixa").value);
    let nInicial = parseFloat(document.getElementById("CalcularEnergiaDoNivelQuannicial").value);
    let nFinal = parseFloat(document.getElementById("CalcularEnergiaDoNivelQuannFinal").value);
    
  
    let proton = 1.673**-27;
    let eletron = 9.101**-31; 
    let massa;

    const protOuEle = document.querySelector("#protonOuEletron");
    
    if(protOuEle == 1){
        massa = proton;
    }else{
        massa = eletron;
    }
    const h = 6.626E-34;
    const convEV = 1.602E-19;
    const pi = Math.PI;
    

    const R1 = Math.sqrt(2 / larguraDaCaixa).toExponential(3);
    const Ri = (nInicial * pi / larguraDaCaixa).toExponential(3);
    const Rf = (nFinal * pi / larguraDaCaixa).toExponential(3);

    const respostaElement0 = document.querySelector(".CalcularEnergiaDoNivelQuanResposta0");
    respostaElement0.textContent = `Nível de energia com o Ni: ${R1}sen(${Ri} * x)\nNível de energia com o Nf: ${R1}sen(${Rf} * x)`;


    let Ei = (nInicial ** 2 * h ** 2) / (massa*8*(larguraDaCaixa**2));
    let EiJ = Ei / convEV;

    let Ef = (nFinal ** 2 * h ** 2) / (massa*8*(larguraDaCaixa**2));
    let EfJ = Ef / convEV;

    const respostaElement = document.querySelector(".CalcularEnergiaDoNivelQuanResposta");
    respostaElement.textContent = `Energia do nível quântico com o Ni: ${Ei.toExponential(3)} J, ou ${EiJ.toExponential(3)} eV Energia do nível quântico com o Nf: ${Ef.toExponential(3)} J, ou ${EfJ.toExponential(3)} eV`;


    let VelI, VelF;
    let Efoton = 0;

    if (Ei > Ef){
        Efoton = Ei - Ef
    }
    else if (Ef > Ei) {
    Efoton = EfJ - EiJ
    }
    

    VelI = Math.sqrt((2 * EiJ) / massa);
    VelF = Math.sqrt((2 * EfJ) / massa);

    const respostaFotonVelocidade = document.querySelector(".CalcularEnergiaDoNivelQuanResposta2");

    respostaFotonVelocidade.textContent = `Energia do fóton: ${Efoton} J Velocidade inicial da partícula: ${VelI.toExponential(3)} m/s Velocidade final da partícula: ${VelF.toExponential(3)} m/s`; 


    let broglieInicial = h/(Math.sqrt(2*massa*Ei));
    let broglieFinal = h/(Math.sqrt(2*massa*Ef));

    const respostaBroglie = document.querySelector(".CalcularEnergiaDoNivelQuanResposta3");

    respostaBroglie.textContent = `Broglie Inicial: ${broglieInicial.toExponential(2)}  Broglie Final: ${broglieFinal.toExponential(2)}`;
    




    const respostaEnergiaDoNivelQuanElement = document.getElementById("respostaEnergiaDoNivelQuan");
    respostaEnergiaDoNivelQuanElement.style.display = "block";
  }


  function CalcularEnergiaNivelQuantico() {
    let larguraDaCaixa = parseFloat(document.getElementById("CalcularEnergiaDoNivelQuanLarguraDaCaixa").value);
    let nInicial = parseFloat(document.getElementById("CalcularEnergiaDoNivelQuannicial").value);
    let nFinal = parseFloat(document.getElementById("CalcularEnergiaDoNivelQuannFinal").value);
    
  
    let proton = 1.673**-27;
    let eletron = 9.101**-31; 
    let massa;

    const protOuEle = document.querySelector("#protonOuEletron");
    
    if(protOuEle == 1){
        massa = proton;
    }else{
        massa = eletron;
    }
    const h = 6.626E-34;
    const convEV = 1.602E-19;
    const pi = Math.PI;
    

    const R1 = Math.sqrt(2 / larguraDaCaixa).toExponential(3);
    const Ri = (nInicial * pi / larguraDaCaixa).toExponential(3);
    const Rf = (nFinal * pi / larguraDaCaixa).toExponential(3);

    const respostaElement0 = document.querySelector(".CalcularEnergiaDoNivelQuanResposta0");
    respostaElement0.textContent = `Nível de energia com o Ni: ${R1}sen(${Ri} * x)\nNível de energia com o Nf: ${R1}sen(${Rf} * x)`;


    let Ei = (nInicial ** 2 * h ** 2) / (massa*8*(larguraDaCaixa**2));
    let EiJ = Ei / convEV;

    let Ef = (nFinal ** 2 * h ** 2) / (massa*8*(larguraDaCaixa**2));
    let EfJ = Ef / convEV;

    const respostaElement = document.querySelector(".CalcularEnergiaDoNivelQuanResposta");
    respostaElement.textContent = `Energia do nível quântico com o Ni: ${Ei.toExponential(3)} J, ou ${EiJ.toExponential(3)} eV Energia do nível quântico com o Nf: ${Ef.toExponential(3)} J, ou ${EfJ.toExponential(3)} eV`;


    let VelI, VelF;
    let Efoton = 0;

    if (Ei > Ef){
        Efoton = Ei - Ef
    }
    else if (Ef > Ei) {
    Efoton = EfJ - EiJ
    }
    

    VelI = Math.sqrt((2 * EiJ) / massa);
    VelF = Math.sqrt((2 * EfJ) / massa);

    const respostaFotonVelocidade = document.querySelector(".CalcularEnergiaDoNivelQuanResposta2");

    respostaFotonVelocidade.textContent = `Energia do fóton: ${Efoton} J Velocidade inicial da partícula: ${VelI.toExponential(3)} m/s Velocidade final da partícula: ${VelF.toExponential(3)} m/s`; 


    let broglieInicial = h/(Math.sqrt(2*massa*Ei));
    let broglieFinal = h/(Math.sqrt(2*massa*Ef));

    const respostaBroglie = document.querySelector(".CalcularEnergiaDoNivelQuanResposta3");

    respostaBroglie.textContent = `Broglie Inicial: ${broglieInicial}  Broglie Final: ${broglieFinal}`;
    




    const respostaEnergiaDoNivelQuanElement = document.getElementById("respostaEnergiaDoNivelQuan");
    respostaEnergiaDoNivelQuanElement.style.display = "block";
  }
  

// cria os gráficos de acordo com o movimento do robo e da bola com os seus arrays 
function grafico(){
    // cria o gráfico de posicao do robo
    var trace1 = {
        x: roboX,
        y: roboY,
        mode: 'lines+markers',
        name: 'Trajetoria Robo',
        line: {
            color: 'rgb(0, 0, 0)',
            width: 1
        }
    };

    var trace2 = {
        x: vetorBolainterceptacaoX,
        y: vetorBolainterceptacaoY,
        mode: 'lines+markers',
        name: 'Trajetoria Bola',
        line: {
            color: '#e6961e',
            width: 1
        }
    };

    var data = [ trace1, trace2];

    var layout = {
        title:'Trajetoria da bola e robo X/Y'
    };

    Plotly.newPlot('trajetoria', data, layout);
    // componente x da posicao do robo pelo tempo
    var xtRobo = {
        x: vetorTempo,
        y: roboX,
        mode: 'lines+markers',
        name: 'X/T do Robo',
        line: {
            color: 'rgb(0, 0, 0)',
            width: 1
        }
    };
    var xtBola = {
        x: vetorTempo,
        y: vetorBolainterceptacaoX,
        mode: 'lines+markers',
        name: 'X/T da Bola',
        line: {
            color: '#e6961e',
            width: 1
        }
    };

    var data = [xtRobo, xtBola];
    var layout = {
        title: 'X do Robo e da Bola pelo Tempo'
    };
    Plotly.newPlot('xRoboBola', data, layout);

    // componente y da posicao do robo pelo tempo
    var ytRobo = {
        x: vetorTempo,
        y: roboY,
        mode: 'lines+markers',
        name: 'Y/T do Robo',
        line: {
            color: 'rgb(0, 0, 0)',
            width: 1
        }
    };
    var ytBola = {
        x: vetorTempo,
        y: vetorBolainterceptacaoY,
        mode: 'lines+markers',
        name: 'Y/T da Bola',
        line: {
            color: '#e6961e',
            width: 1
        }
    };

    var data = [ytRobo, ytBola];
    var layout = {
        title: 'Y do Robo e Bola pelo Tempo'
    };
    Plotly.newPlot('yRoboBola', data, layout);

    // componente x da velocidade do robo pelo tempo
    var vxRobo = {
        x: vetorTempo,
        y: veloRobo,
        mode: 'lines+markers',
        name: 'Vx/T do Robo',
        line: {
            color: 'rgb(0, 0, 0)',
            width: 1
        }
    }
    var vxBola = {
        x: vetorTempo,
        y: veloBolaX,
        mode: 'lines+markers',
        name: 'Vx/T da Bola',
        line: {
            color: '#e6961e',
            width: 1
        }
    }
    var data = [vxRobo, vxBola];
    var layout = {
        title: 'Vx do Robo e da Bola pelo Tempo'
    };
    Plotly.newPlot('vxRoboBola', data, layout);

    // componente y da velocidade do robo pelo tempo
    var vyRobo = {
        x: vetorTempo,
        y: veloRobo,
        mode: 'lines+markers',
        name: 'Vy/T do Robo',
        line: {
            color: 'rgb(0, 0, 0)',
            width: 1
        }
    }
    var vyBola = {
        x: vetorTempo,
        y: veloBolaY,
        mode: 'lines+markers',
        name: 'Vy/T da Bola',
        line: {
            color: '#e6961e',
            width: 1
        }
    }
    var data = [vyRobo, vyBola];
    var layout = {
        title: 'Vy do Robo e da Bola pelo Tempo'
    };
    Plotly.newPlot('vyRoboBola', data, layout);

    // graficos da aceleracao pelo tempo:
    var axRobo = {
        x: vetorTempo,
        y: aceleracaoRobo,
        mode: 'lines+markers',
        name: 'Ax/T do Robo',
        line: {
            color: 'rgb(0, 0, 0)',
            width: 1
        }
    }
    var axBola = {
        x: vetorTempo,
        y: -0.5276,
        mode: 'lines+markers',
        name: 'Ax/T da Bola',
        line: {
            color: '#e6961e',
            width: 1
        }
    }
    var data = [axRobo, axBola];
    var layout = {
        title: 'Ax do Robo e da Bola pelo Tempo'
    };
    Plotly.newPlot('axRoboBola', data, layout);

    var ayRobo = {
        x: vetorTempo,
        y: aceleracaoRobo,
        mode: 'lines+markers',
        name: 'Ay/T do Robo',
        line: {
            color: 'rgb(0, 0, 0)',
            width: 1
        }
    }
    var ayBola = {
        x: vetorTempo,
        y: aceleracaoBolaY,
        mode: 'lines+markers',
        name: 'Ay/T da Bola',
        line: {
            color: '#e6961e',
            width: 1
        }
    }
    var data = [ayRobo, ayBola];
    var layout = {
        title: 'Ay do Robo e da Bola pelo Tempo'
    };
    Plotly.newPlot('ayRoboBola', data, layout);

    // grafico da distancia relativa:
    var distRobo = {
        x: vetorTempo,
        y: distancia,
        mode: 'lines+markers',
        name: 'Distancia relativa',
        line: {
            color: 'rgb(0, 0, 0)',
            width: 1
        }
    };


    var data = [distRobo];
    var layout = {
        title: ''
    };
    Plotly.newPlot('distanciaRelativa', data, layout);

    var distRobo = {
        x: vetorTempo,
        y: distancia,
        mode: 'lines+markers',
        name: 'Distancia relativa',
        line: {
            color: 'rgb(0, 0, 0)',
            width: 1
        }
    };


    var data = [distRobo];
    var layout = {
        title: 'Trajetória da bola até o gol'
    };
    Plotly.newPlot('distanciaRelativa', data, layout);




    var movObX = {
        x: aprofundamento2X,
        y: aprofundamento2Y,
        mode: 'lines+markers',
        name: 'Trajetoria Robo',
        line: {
            color: 'rgb(0, 0, 0)',
            width: 1
        }
    }
    var movObY = {
        x: AprofundamentoRobo2X,
        y: AprofundamentoRobo2Y,
        mode: 'lines+markers',
        name: 'Trajetoria Bola',
        line: {
            color: '#e6961e',
            width: 1
        }
    }
    var data = [movObX, movObY];
    var layout = {
        title: 'Trajetoria da bola e robo X/Y'
    };
    Plotly.newPlot('movObli', data, layout);
    
}
function informacoesCinematicas(){
    // responsavel por mostrar as informacoes cinematicas nos inputs da ultima seccao
    document.getElementById("aceleracaoRobo").innerHTML ="Aceleração = "+ aceleracao + " m/s²";
    document.getElementById("velocidadeMax").innerHTML ="Velocidade máxima = "+ veloMaxima + " m/s";
    document.getElementById("massaRobo").innerHTML ="Massa = " +2.2 + " kg";

    document.getElementById("vetorBolaXIntercept").innerHTML ="x = "+ vetorBolaX[j] + " m";
    document.getElementById("vetorBolaYIntercept").innerHTML ="y = "+ vetorBolaY[j] + " m";
    document.getElementById("roboXIntercept").innerHTML ="x = "+ roboX[j] + " m";
    document.getElementById("roboYIntercept").innerHTML ="y = "+ roboY[j] + " m";

    document.getElementById("velocidadeXBolaIntercept").innerHTML ="vx = " +veloBolaX[j] + " m/s";
    document.getElementById("velocidadeYBolaIntercept").innerHTML ="vy = " +veloBolaY[j] + " m/s";
    document.getElementById("velocidadeRoboXIntercept").innerHTML ="vx = "+ (roboX[j]-roboX[j-1])/(cos[j]*0.05) + " m/s";
    document.getElementById("velocidadeRoboYIntercept").innerHTML ="vy = "+ (roboY[j]-roboY[j-1])/(sin[j]*0.05) + " m/s";

    document.getElementById("aceleracaoXBola").innerHTML ="ax = "+ aceleracaoBolaX + " m/s²";
    document.getElementById("aceleracaoYBola").innerHTML ="ay = "+ aceleracaoBolaY + " m/s²";
    
    let RX = Math.abs(roboX[j] - roboX[0]);
    let RY = Math.abs(roboY[j] - roboY[0]);
    document.getElementById("distanciaRoboX").innerHTML ="dx = "+ RX + " m";
    document.getElementById("distanciaRoboY").innerHTML ="dy = "+ RY + " m";

    document.getElementById("distanciaBolaX").innerHTML ="dx = "+ Math.abs(vetorBolaX[j] - vetorBolaX[0]) + " m";
    document.getElementById("distanciaBolaY").innerHTML ="dy = "+ Math.abs(vetorBolaY[j] - vetorBolaY[0]) + " m";

    document.getElementById("intercept").innerHTML ="O tempo de interceptação foi de "+"<b class = 'orange'>"+ tempoInterceptacao +"<b/>"+" segundos!";
}

const selec = (el) => document.querySelector(el);

function dom (){
    selec("#TempoInter").style.display = "block";
    selec("#graphs").style.display = "block";
    selec("#info").style.display = "flex";
    selec("#graphs2").style.display ="block"
}