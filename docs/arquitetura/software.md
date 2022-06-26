# Arquitetura de Software

Para garantir o isolamento de nossos casos de uso, facilitando adequações em caso de migrações de clouds ou mudanças de arquitetura, ou mesmo a separação de micro serviços, iremos adotar a arquitetura hexagonal como modelo para nossas aplicações.

![Arquitetura Hexagonal][1]

Neste padrão de arquitetura, também conhecido como *ports & adapters*, ocorre o desacoplamento do core da aplicação (casos de uso e domínio) das integrações externas. Isso se dá devido a inversão de dependências promovida pelos ports.

[1]: /SDADocs/assets/images/ref-arch/hexagonal-arch.png
