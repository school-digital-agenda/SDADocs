# Granularidade de micro-serviços

O primeiro ponto a se observar é o nosso entendimento sobre a granularidade dos micro serviços. Adotamos a avaliação partindo de uma maior granularidade, para refinar em granularidades menores conforme as características de cada serviço. Consideramos o contexto de domínio como o ponto de partida para a definição de granularidade de um micro serviço, em nosso entendimento para cada contexto delimitado sempre devemos definir um novo micro serviço, sendo esta a maior granularidade possível.

![Domínios][1]

Considerando o domínio apresentado, os principais micro serviços serão: *Contexto1*, *Contexto2* e *Contexto3*. 

Porém diversos fatores podem fazer com que estes micro serviços sejam divididos:

- Complexidade do contexto 
- Complexidade do domínio
- Carga de processamento
- Volume de requisições
- Tamanho e quantidade de equipes para sustentar o micro serviço. 

Se houver o entendimento de que o *Contexto 1* é muito grande para um micro serviço, devemos dividi-lo. Por exemplo, podemos ter um micro serviço responsável pelos Domínios 1 e 4 e outro responsável Domínios 2 e 3.

## Tamanho de equipes

Um indicador que um micro serviço está se tornando complexo é o tamanhdo das equipes que o sustentam. Para evitar problemas com o ciclo de desenvolvimento, uma única equipe deve ser capaz de sustentar e evoluir o micro serviço. Quando um micro serviço for grande demais para ser sustentado por uma única equipe é um sinal que está se tornando um complexo e este deve ser dividido. Porém uma equipe pode sustentar um ou mais micro serviços.

![Micro serviços por equipes][2]

!!! warning "Ponto importante"
    Aumentar o tamanho da equipe além de não resolver o problema de conflitos das entregas, também trará um problema de gestão. Grandes equipes de desenvolvimento tendem a se dividir em grupos de trabalho, como se fossem sub equipes, o que demandaria o gerenciamento dos conflitos entre as diversas frentes de trabalho.


[1]: /SDADocs/assets/images/ref-arch/dominios.png
[2]: /SDADocs/assets/images/ref-arch/equipes_e_deploy.png
