# SDAArchRef
Projeto para documentação da arquitetura de referência da aplicação **School Digital Agenda**

## Tecnologias
Tecnologia      | Versão | Referência
----------------|--------|----------------------------------------------
Python          | 3.8^   | 
MkDocs          | 1.3.0  | https://www.mkdocs.org/
MkDocs Material | 8.3.6  | https://squidfunk.github.io/mkdocs-material/

----------------------------------
## Desenvolvimento

### Configurar ambiente
``` bash
# Instalar MkDocs
pip install mkdocs

# Instalar MkDocs Material
pip install mkdocs-material
```

### Configurar IDE
Caso utilize o VS Code, adicione o `yaml.schema` a seu `settings.json`:
``` yaml
{
  "yaml.schemas": {
    "https://squidfunk.github.io/mkdocs-material/schema.json": "mkdocs.yml"
  }
}
```

### Desenvolvimento
``` bash
# Executar aplicação localmente
mkdocs serve

# Gerando site
mkdocs build
```
