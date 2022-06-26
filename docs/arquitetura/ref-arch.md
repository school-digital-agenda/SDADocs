# Arquitetura de Referência

O primeiro ponto que definimos é a adoção dos micro serviços como modelo para desenvolvimento, esta decisão foi tomada devido às características do projeto. O primeiro ponto diz respeito à autonomia dos serviços, por se tratar de um MVP algumas premissas podem se provar ineficientes e com a autonomia dada pelos micro serviços teremos maior flexibilidade em descontinuar o que não serviu e reaproveitar o que foi eficaz. Ainda relacionado a esta característica está a agilidade e tamanho das equipes, o que propicia a entrega contínua destas evoluções.

Outro fator considerado é relacionado a escalabilidade, onde podemos dimensionar cada parte da solução conforme a demanda. Também consideramos a liberdade tecnológica, como se trata de um MVP, onde estamos validando o produto e soluções, esta flexibilidade nos possibilita adotar uma nova tecnologia que atenda melhor a uma necessidade de maneira fácil, o que em uma aplicação monolítica pode se tornar inviável.

O segundo ponto diz respeito ao modelo de deploy em si, como falamos de micro serviços o padrão adotado será o PaaS. Onde adotaremos uma plataforma para publicação de contêineres ou aplicações serverless, dependendo da granularidade aplicada ao micro serviço, para serviços de maior granularidade devemos utilizar contêineres, já para aplicações de menor granularidade serão adotadas soluções  serverless.

## Topologia Proposta

Para a versão inicial da solução, adotaremos uma topologia que atenda às necessidades da aplicação. Considerando a demanda e custo, utilizaremos apenas um data center. Para disponibilizar a aplicação em ambiente web será configurado um DNS, que deve direcionar as requisições a um serviço de entrega de conteúdo (CDN) ou ao Gateway de aplicações. O gateway de aplicações terá a responsabilidade de filtrar as requisições e direcionar aos demais serviços de nossa solução, isso facilitará o gerenciamento de acessos e segurança, pois terão de ser aplicados apenas neste componente, o que se torna de grande importância em uma arquitetura de micro serviços.

![Topologia][1]

Considerando a independência de cloud adotaremos o kubernetes para gerenciamento de contêineres, o que será trará maior flexibilidade em relação a outros gerenciadores por ser adotado no padrão PaaS por todos os provedores de cloud pesquisados e no caso de não haver o serviço gerenciado, ainda é possível disponibilizá-lo através de uma plataforma IaaS. Para aplicações serverless adotaremos serviços gerenciados das clouds e posteriormente avaliaremos frameworks para desenvolvimento dos mesmos.

## Exemplo de aplicação

A seguir segue o exemplo de aplicação desta topologia em uma stack AWS.

![Arquitetura Proposta][2]

> Neste exemplo não utilizamos o Cognito como gerenciador de identidade e acessos, por considerar que este acoplaria nossa solução à stack AWS, além de outros aspectos que favorecem outras soluções.


[1]: /SDADocs/assets/images/ref-arch/ref-arch.png
[2]: /SDADocs/assets/images/ref-arch/arch-aws-simplified.png
