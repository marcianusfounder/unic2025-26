# Exercícios e Práticas: Laboratório de Novas Tendências em Tecnologias I

Este guia prático visa aplicar os conceitos teóricos aprendidos através de laboratórios "hands-on". Os exercícios cobrem Inovação, IA, Cloud e IoT.

---

## Laboratório 1: Design Thinking e Ideação de Produto

**Objetivo:** Aplicar os passos do Design Thinking para um problema do mundo real.

**Cenário:** O campus universitário sofre com um problema crônico de desperdício de energia (ar-condicionado ligado em salas vazias, luzes acesas de dia).

**Passos Práticos:**
1. **Empatia:** Realize entrevistas simuladas (role-play com colegas) abordando alunos, professores e o setor de manutenção.
2. **Definição:** Construa a *Persona* (ex: Sr. Carlos, chefe da manutenção, sobrecarregado) e formule a declaração do problema.
3. **Ideação:** Utilize a técnica *Crazy 8s* (dobrar uma folha de papel em 8 partes e desenhar 8 ideias de soluções em 8 minutos).
4. **Prototipação:** Utilize ferramentas como *Figma* ou papelão para desenhar a interface de um aplicativo ou o layout de um sistema de sensores.

---

## Laboratório 2: Inteligência Artificial (Acesso a APIs)

**Objetivo:** Integrar um modelo de IA Generativa (LLM) usando Python.

**Pré-requisitos:** Python instalado e uma chave de API gratuita (ex: Google Gemini ou OpenAI).

**Exercício Prático (Python):**
Crie um script que receba um tema do usuário e utilize a IA para gerar um resumo executivo de 1 parágrafo.

```python
import os
import requests
import json

# Exemplo didático simulando uma chamada de API
def gerar_resumo(tema):
    api_key = os.getenv("API_KEY")
    url = "https://api.example.com/v1/generate"
    
    payload = {
        "model": "text-generator-model",
        "prompt": f"Escreva um resumo executivo sobre a nova tendência: {tema}",
        "max_tokens": 100
    }
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    print(f"Enviando requisição para gerar resumo sobre: {tema}...")
    # response = requests.post(url, json=payload, headers=headers)
    # return response.json()['choices'][0]['text']
    
    # Simulação de resposta
    return f"A tecnologia {tema} promete revolucionar o mercado aumentando a eficiência operacional e automatizando processos chave, reduzindo custos em até 30% e viabilizando novos modelos de negócios escaláveis."

tema_usuario = input("Digite a tendência tecnológica para resumir: ")
print("\nResumo Gerado pela IA:\n", gerar_resumo(tema_usuario))
```
*Atividade:* Modifique o prompt para que a IA sempre retorne a resposta no formato JSON estruturado com os campos `resumo`, `impacto_financeiro` e `riscos`.

---

## Laboratório 3: Cloud Computing e Serverless (Funções na Nuvem)

**Objetivo:** Criar e realizar o deploy de uma aplicação mínima sem provisionar servidores (Arquitetura Serverless).

**Plataforma sugerida:** Vercel, Netlify ou AWS Lambda (free tier).

**Passos Práticos:**
1. Crie uma conta gratuita na Vercel (vercel.com).
2. Escreva uma função Serverless simples em Node.js (arquivo `api/hello.js`):

```javascript
// api/hello.js
export default function handler(request, response) {
  const { name = 'Estudante' } = request.query;
  return response.status(200).json({
    message: `Olá, ${name}! Seu código está rodando na Nuvem.`,
    timestamp: new Date().toISOString()
  });
}
```
3. Utilize o Vercel CLI no terminal para realizar o deploy com o comando `vercel`.
4. Teste sua API acessando o URL gerado (ex: `https://seu-app.vercel.app/api/hello?name=Turma`).

---

## Laboratório 4: Simulação de Internet das Coisas (IoT)

**Objetivo:** Compreender a conexão de sensores e envio de dados via protocolo MQTT.

**Ferramenta sugerida:** Wokwi Simulator (wokwi.com) para simular o hardware ESP32 e o Node-RED ou broker público MQTT (test.mosquitto.org) para visualizar os dados.

**Cenário Prático:**
1. Acesse o Wokwi e crie um projeto com o microcontrolador ESP32.
2. Conecte virtualmente um sensor DHT22 (Temperatura e Umidade) aos pinos do ESP32.
3. Utilize o código base (em C/Arduino) fornecido no laboratório para conectar o ESP32 ao Wi-Fi virtual (`Wokwi-GUEST`) e a um Broker MQTT público.
4. **Desafio:** Programe uma lógica para que o dispositivo publique uma mensagem no tópico `lntt/unic/temperatura` sempre que a temperatura ultrapassar 25°C.
5. Em seu computador, use um cliente MQTT (como o MQTT Explorer) para se inscrever no tópico e observar as mensagens chegando em tempo real.
