****************************************************************************************
`brasil.gov.newfieldcomplement: Suporte a novos campos dexterity na busca multifacetada.`
****************************************************************************************

.. contents:: Conteúdo
   :depth: 2


Introdução
----------

A criação de novos tipos de conteúdo ou novos campos em tipos já existentes torna o Plone Site customizado.
A criação de novos índices e metadados no portal_catalog tendem a diminiur o desempenho da aplicação.
Ressaltamos que a criação de novos Tipos, Campos, Índices e Metadados deve ser realizada com planejamento e cautela.

Manager
-------

Exemplo de ações que podem ser executadas pelo usuário com perfil Manager.


- Criar novos campos para um tipo de conteúdo Dexterity.

    1. Configuração do site > Tipos de conteúdo dexterity > File
    2. Aba Campos
    3. Criar nova aba: Relatório
    4. Criar os novos campos: data_relatorio e ministerio_relatorio

    image:: data_relatorio_field.png

    image:: ministerio_relatorio_field.png

    5. O campo ministerio_relatorio utilizará o cocabulário dinâmico 01.

    Configuração do site > Tipos de conteúdo dexterity > File > Campos > Relatório > ministerio_relatorio > Configurações

    image:: ministerio_relatorio_field_config.png


- Criar índice e metadado no portal_catalog para os novos campos.

    Para que um novo campo possa ser utilizado na busca multifacetada é necessário
    que haja um índice no portal_catalog relacionado a ele.

    Para que o valor informado em um novo campo possa ser exibido em uma listagem
    é conveniente que exista um metadado no portal_catalog relacionado a ele.

    1. configuração do site > Adicionar índice/metadata ao portal_catalog

    image:: data_relatorio_index_metadata.png

    image:: ministerio_relatorio_index_metadata.png

    - Tipos de índice:
        - FieldIndex: campos texto pequenos, como o título. Realizamos uma comparação completa do termo.
        - DateIndex: campos data.
        - ZCTextIndex: campos texto maiores, como o descrição. Realizamos busca por palavras/partes do todo.
        - BooleanIndex: campos checkbox. Verdadeiro ou Falso.
        - KeywordIndex: campox texto como o Tags. Palavras-chave.
