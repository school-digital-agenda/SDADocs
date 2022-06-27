# Tech Sheet
=== "Gerenciamento de dados"

    ??? check "Amazon S3"
        O  Amazon S3 é um serviço de armazenamento de objetos que oferece escalabilidade, disponibilidade de dados, segurança e performance. Seu objetivo é armazenar e proteger qualquer volume de dados para uma variedade de casos de uso.

        !!! check "Adote"
            Recomendamos seu uso para qualquer armazenamento de arquivos dinâmico ou estático.

        >[Veja mais][10]

    ??? note "MongoDB"
        MongoDB é um banco de dados orientado a documentos multiplataforma. Classificado como um banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas opcionais.

    ??? note "Postgres"
        O Postgres, também conhecido como PostgreSQL, é um sistema de gerenciamento de banco de dados relacional gratuito e de código aberto que enfatiza a extensibilidade e a conformidade com o SQL. Foi originalmente chamado POSTGRES, referindo-se às suas origens como um sucessor do banco de dados Ingres desenvolvido na Universidade da Califórnia, Berkeley.

    ??? note "RabbitMQ"
        !!! abstract inline end "Caracteristicas"
            - Permite a clusterização
            - Alta disponibilidade
            - Espelhamento
            - Garantia na entrega de mensagens
            - Priorização de mensagens
            - Persistência em memória e disco
            - Federalização
            - Extenssível por plugins

        RabbitMQ é um message-broker de código aberto que originalmente implementou o **AMQP** e desde então foi estendido com uma arquitetura de plug-in para oferecer suporte ao **Stomp**, **MQTT** e outros protocolos.
        
        !!! check "Adote"
            Recomendamos o seu uso para a troca de mensagens entre aplicações o que permite o processamento assincrono e com alto nível de desacoplamento entre elas.

    ??? note "Redis"
        O Redis é um sistema de armazenamento de estrutura de dados em memória, usado como um banco de dados key-value distribuído, cache e agente de mensagens, com durabilidade opcional. O Redis oferece suporte a diferentes tipos de estruturas de dados abstratas, como strings, listas, mapas, conjuntos, conjuntos classificados, HyperLogLogs, bitmaps, fluxos e índices espaciais.

    ??? question "Kafka"
    ??? question "MariaDB"
    ??? question "MySQL"
    ??? question "Cassandra"

    ??? danger "Dropbox"
    ??? danger "Google Drive"
    ??? danger "JMS"
        
=== "Plataformas & Infraestrutura"
 
    ??? check "Github"
        GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.
        
        !!! check "Adote"
            Utilizamos o github para armazenamento, versionamento e revisão do código através do git flow.

        > [Veja mais][5]

    ??? check "Github Actions"
        O GitHub Actions facilita a automatização de todos os seus fluxos de trabalho de software, agora com CI/CD de classe mundial. Crie, teste e implante seu código diretamente do GitHub.

        !!! check "Adote"
            Utilize para automatizar as tarefas de build, teste e deploy de aplicações

        > [Veja mais][2]

    ??? check "Github Pages"
        GitHub Pages são páginas da Web públicas hospedadas e publicadas por meio do GitHub.

        !!! check "Adote"
            Utilize para disponibilizar a documentação de nossas aplicações.

        > [Veja mais][3]

    ??? check "MkDocs"
        O MkDocs é um gerador de site estático simple e rápido, voltado para a construção de documentação de projetos. Os arquivos de origem da documentação são escritos em Markdown e configurados com um único arquivo de configuração YAML.

        !!! check "Adote"
            Utilizamos o mkdocs como linguagem para implementar a documentação de nossas aplicações.

        > [Veja mais][1]

    ??? check "Dependabot"
        O dependabot efetua atualizações de dependência automatizadas incorporadas ao GitHub.

        !!! check "Adote"
            O dependabot deve ser configurado em todos os nossos repositórios.

        > [Veja mais][4]

    ??? check "Docker"
        Docker é um conjunto de produtos de plataforma como serviço (PaaS) que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração. Eles podem se comunicar uns com os outros por meio de canais bem definidos. Todos os contêineres são executados por um único kernel do sistema operacional e, portanto, usam menos recursos do que as máquinas virtuais.

        !!! check "Adote"
            Utilizamos o Docker para gerar imagens que serão executadas em containeres em nossos ambientes cloud, disponibilizando os micro serviços para uso em nossa plataforma.

        > [Veja mais][6]

    ??? note "Kubernetes"
        O Kubernetes é um sistema de orquestração de contêineres de código aberto para automatizar a implantação, o dimensionamento e o gerenciamento de software.

        !!! note "Experimente"
            Estamos avaliando sua utilização em conjunto com o EKS

    ??? note "Amazon EKS"

    ??? question "CircleCI"

    ??? question "Jenkins"

    ??? danger "Amazon ECS"
        O Amazon ECS é um serviço de orquestração de contêineres totalmente gerenciado que ajuda você a implementar, gerenciar facilmente e escalar aplicações em contêiner. Ele se integra completamente ao restante da plataforma AWS para fornecer uma solução segura e fácil de usar para a execução de cargas de trabalho de contêiner na nuvem e agora em sua infraestrutura com o Amazon ECS Anywhere.

        !!! danger "Não utilize!"
            Apesar das facilidades, NÃO RECOMENDAMOS o seu uso por acoplar a solução a um único provedor cloud. Em seu lugar adotamos o kubernetes e soluções gerenciadas baseadas neste, como o EKS a própria AWS.

=== "Ferramentas"
 
    ??? check "Gradle"
        Gradle é um sistema de automação de compilação de código aberto que se baseia nos conceitos de Apache Ant e Apache Maven e introduz uma linguagem de domínio específico (DSL) baseada em Groovy para declarar a configuração do projeto. Projetado para multi-projetos que podem ter alto crescimento, e suporta compilações incrementais, de modo que qualquer tarefa dependente dessas partes não precisa ser reexecutada.

        Adotamos o gradle para automatizar e gerenciar nossos projetos de liguagens baseadas em JVMs.

        > [Veja mais][7]

    ??? check "JaCoCo"
        As ferramentas de cobertura de código Java são de dois tipos: primeiro, ferramentas que adicionam instruções ao código-fonte Java e requerem sua recompilação. Segundo, ferramentas que instrumentam o bytecode, antes ou durante a execução. O objetivo é descobrir quais partes do código são testadas registrando as linhas de código executadas durante a execução de um teste.

        > [Veja mais][8]

        Utilizamos o JaCoCo para análise da cobertura de testes em nosso codigo, integrado ao gradle através de seu plugin.

        > [Veja mais][9]

    ??? note "Keycloak"
        !!! abstract inline end "Caracteristicas"

            - Solução Open Source
            - Suporte a múltiplos provedores de identidade
            - Fácil de customizar
            - Mantida por desenvolvedores da Redhat
            - Suporte a MFA
            - SDK oficial para spring boot
            - Desenvolvimento de SDKs pela comunidade
            - Funcionalidades completas

        O Keycloak é um software de código aberto que permitir o *"single sign-on"* com *"Identity and Access Management"* voltado para aplicativos e serviços modernos. Em março de 2018, este projeto da comunidade WildFly está sob a administração da Red Hat, que o utiliza como projeto upstream para seu produto RH-SSO.

        !!! note "Experimente"
            Ainda não temos nenhum case sobre o Keycloak. Experimentaremos em nosso MVP.

        >[Veja mais][16]

    ??? note "Micrometer"
    ??? note "Grafana"
    ??? note "Prometheus"
    ??? question "Datadog"
    ??? question "Terraform"
    ??? question "Sonar"
    ??? danger "Maven"

=== "Linguagens e Frameworks"
 
    ??? check "Kotlin"
        Kotlin é uma linguagem de programação multiplataforma, orientada a objetos e funcional, concisa e estaticamente tipada, que compila para a Máquina virtual Java e que também pode ser traduzida para a linguagem JavaScript e compilada para código nativo.

        A versão da JVM (Java Virtual Machine) de sua biblioteca padrão depende da Java Class Library, mas a inferência de tipos permite que sua sintaxe seja mais concisa. Apesar de possuir uma sintaxe mais concisa e um pouco diferente da linguagem Java, Kotlin é projetada para ter uma interoperabilidade total com código Java.

        > [Veja mais][11]

    ??? check "Spring"
        O Spring é um framework de aplicação e container de IoC, de código aberto, para a plataforma Java. Os principais recursos da estrutura podem ser usados por qualquer aplicativo Java, mas existem extensões para a construção de aplicativos da Web sobre a plataforma Java EE.

        > [Veja mais][12]

    ??? check "Spring Boot"
        O Spring Boot facilita a criação de aplicativos independentes baseados em Spring onde você pode "apenas executar" uma aplicação. Com o spring boot a maioria dos aplicativos Spring Boot precisa de configuração mínima do Spring.

        > [Veja mais][13]

    ??? check "Spring Cloud"
        O Spring Cloud é parte do Spring Framework, seu conjunto de projetos tem o objetivo de facilitar o desenvolvimento para nuvem, baseado no [12-Factor App][15].

        > [Veja mais][14]

    ??? note "Kotlin coroutines"
    ??? question "Nginx"
    ??? question "Vue"
    ??? question "Angular"
    ??? question "Flutter"
    ??? question "Python"
    ??? question "Micronaut"
    ??? question "Quarkus"
    ??? danger "Spring Batch"
    ??? danger "Spring Data REST"
    ??? danger "NestJS"
    ??? danger "NodeJS"
    ??? danger "React"
    ??? danger "Kotlin Mobile"
    ??? danger "Swing"

*[Amazon S3]: Amazon Simple Storage Service
*[JMS]: Java Message Service
*[JaCoCo]: Java Code Coverage Tool
*[IoC]: Inversão de Controle (Inversion of Control)
*[Java EE]: Java Enterprise Edition
*[AMQP]: Advanced Message Queueing Protocol
*[Stomp]: Streaming Text Oriented Messaging Protocol
*[MQTT]: MQ Telemetry Transaport
*[ECS]: Elastic Container Service
*[EKS]: Elastic Kubernetes Service
*[AWS]: Amazon Web Services

[1]: https://www.mkdocs.org/
[2]: https://github.com/features/actions
[3]: https://docs.github.com/en/pages
[4]: https://github.com/dependabot
[5]: https://docs.github.com/pt
[6]: https://docs.docker.com/
[7]: https://gradle.org/guides/
[8]: https://www.jacoco.org/jacoco/trunk/doc/
[9]: https://docs.gradle.org/current/userguide/jacoco_plugin.html
[10]: https://aws.amazon.com/pt/s3/
[11]: https://developer.android.com/kotlin
[12]: https://spring.io/
[13]: https://spring.io/projects/spring-boot
[14]: https://spring.io/cloud
[15]: https://12factor.net/
[16]: https://www.keycloak.org/
