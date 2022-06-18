# Tech Sheet
=== "Gerenciamento de dados"

    ??? check "Amazon S3"
        O  Amazon S3 é um serviço de armazenamento de objetos que oferece escalabilidade, disponibilidade de dados, segurança e performance. Seu objetivo é armazenar e proteger qualquer volume de dados para uma variedade de casos de uso.

        Recomendamos seu uso para qualquer armazenamento de arquivos dinâmico ou estático.

        >[Veja mais][10]

    ??? note "MongoDB"
    ??? note "Postgres"
    ??? note "RabbitMQ"
    ??? note "Redis"

    ??? question "Kafka"
    ??? question "MariaDB"
    ??? question "MySQL"
    ??? question "Cassandra"

    ??? danger "Dropbox"
    ??? danger "Google Drive"
    ??? danger "JMS"
        
=== "Plataformas & Infraestrutura"
 
    ??? check "Github"
        GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.Recomendamos o uso para armazenamento, versionamento e revisão do código através do git flow.

        > [Veja mais][5]

    ??? check "Github Actions"
        O GitHub Actions facilita a automatização de todos os seus fluxos de trabalho de software, agora com CI/CD de classe mundial. Crie, teste e implante seu código diretamente do GitHub.

        > [Veja mais][2]

    ??? check "Github Pages"
        GitHub Pages são páginas da Web públicas hospedadas e publicadas por meio do GitHub. A maneira mais rápida.

        > [Veja mais][3]

    ??? check "MkDocs"
        O MkDocs é um gerador de site estático simple e rápido, voltado para a construção de documentação de projetos. Os arquivos de origem da documentação são escritos em Markdown e configurados com um único arquivo de configuração YAML.

        > [Veja mais][1]

    ??? check "Dependabot"
        O dependabot efetua atualizações de dependência automatizadas incorporadas ao GitHub.

        > [Veja mais][4]

    ??? check "Docker"
        Docker é um conjunto de produtos de plataforma como serviço (PaaS) que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração. Eles podem se comunicar uns com os outros por meio de canais bem definidos. Todos os contêineres são executados por um único kernel do sistema operacional e, portanto, usam menos recursos do que as máquinas virtuais.

        > [Veja mais][6]

    ??? note "Kubernetes"

    ??? question "Gitlab"
    ??? question "CircleCI"
    ??? question "Jenkins"

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

    ??? note "Spring Gateway"
    ??? note "Java 17"
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
