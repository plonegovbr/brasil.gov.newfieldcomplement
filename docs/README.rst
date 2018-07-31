#########################################################################################
`brasil.gov.newfieldcomplement: Suporte a novos campos dexterity na busca multifacetada.`
#########################################################################################

.. contents:: Conteúdo
   :depth: 2


**A criação de novos tipos de conteúdo ou novos campos em tipos já existentes torna o Plone Site customizado.**

**A criação de novos índices e metadados no portal_catalog tendem a diminiur o desempenho da aplicação.**

**Ressaltamos que a criação de novos Tipos, Campos, Índices e Metadados deve ser realizada com planejamento e cautela.**


Manager
--------

Exemplo de ações que podem ser executadas pelo usuário com perfil Manager.


- Criar novos campos para um tipo de conteúdo Dexterity.

    1) Configuração do site > Tipos de conteúdo dexterity > File

    2) Aba Campos

    3) Criar nova aba: Relatório

    4) Criar os novos campos: data_relatorio e ministerio_relatorio

       .. image:: data_relatorio_field.png

       .. image:: ministerio_relatorio_field.png

    5) O campo ministerio_relatorio utilizará o vocabulário dinâmico 01.

       Configuração do site > Tipos de conteúdo dexterity > File > Campos > Relatório > ministerio_relatorio > Configurações

       .. image:: ministerio_relatorio_field_config.png


- Criar índice e metadado no portal_catalog para os novos campos.

    Para que um novo campo possa ser utilizado na busca multifacetada é necessário
    que haja um índice no portal_catalog relacionado a ele.

    Para que o valor informado em um novo campo possa ser exibido em uma listagem
    é conveniente que exista um metadado no portal_catalog relacionado a ele.

    1) configuração do site > Adicionar índice/metadata ao portal_catalog

       .. image:: data_relatorio_index_metadata.png

       .. image:: ministerio_relatorio_index_metadata.png

       - Tipos de índice:
        - FieldIndex: campos texto pequenos, como o título. Realizamos uma comparação completa do termo.
        - DateIndex: campos data.
        - ZCTextIndex: campos texto maiores, como o descrição. Realizamos busca por palavras/partes do todo.
        - BooleanIndex: campos checkbox. Verdadeiro ou Falso.
        - KeywordIndex: campox texto como o Tags. Palavras-chave.


Administrador do Site (Site Administrator)
--------------------------------------------

- Preencher o(s) vocabulário(s) dinâmico(s).

    1) Configuração do site > Vocabulários Dinâmicos.

        O campo ministerio_relatorio utiliza o vocabulário dinâmico 01.

        .. image:: vocabularios_dinamicos.png


Conteudista (Contributor / Editor)
------------------------------------

- Adicionar e configurar a busca facetada na pasta que irá conter os relatórios (Arquivos).

    1) Criar a pasta 'Relatórios' na raiz do site. (/Plone/relatorios). Publicar a pasta.

    2) Adicionar subpastas conforme a necessidade de organização do conteúdo.
       Como exemplo podem ser criadas as pastas '2018' (/Plone/relatorios/2018) e '2017' (/Plone/relatorios/2017).
       Publicar as pastas.

       .. image:: estrutura_pastas.png

    3) Ativar a busca facetada na pasta 'Relatórios'.

        Página Inicial > Relatórios > Ações > Permitir a navegação facetada

        Página Inicial > Relatórios > Ações > Permitir a pesquisa facetada

        .. image:: ativar_facetada.png

    4) Definir os critérios da busca facetada.

        Página Inicial > Relatórios > Critérios facetadas

        .. image:: criterios_facetadas.png

        Este pacote inclui o arquivo **/docs/relatorios.xml**.

        Uma configuração inicial que pode ser importada na configuração dos critérios e posteriormente editada

        - Título – campo de texto, índice: Título (Title)

            .. image:: titulo.png

        - Tipo – checkboxes, índice: Tipo (portal_type), valor: Arquivo (File), oculto.

            .. image:: tipo.png

        - Local - checkboxes, índice: Local (path), valor: /Plone/relatorios, oculto.

            .. image:: path.png

        - Período – intervalo de datas, índice: data_relatorio

            .. image:: periodo.png

        - Ministério - seleção, índice: ministerio_relatorio

            .. image:: ministerio.png

        - Palavra-chave - campo de texto, indice: Texto disponível para busca (SearchableText)

            .. image:: palavra_chave.png

        Configuração:

        .. image:: config_facetada.png

    5) Definir como visão padrão da pasta ''Relatórios' a opção 'Visão Facetada Tabular'.

        Página Inicial > Relatórios > Exibição > Visão Facetada Tabular

            .. image:: visao_facetada_tabular.png

    6) Configurar as colunas exibidas na Visão Facetada Tabular.
       É obrigatório que pelo menos uma coluna seja preenchida.
       Pelo menos uma coluna deve ser marcada como link para a visão do objeto.

        Página Inicial > Relatórios > Campos da Visão Facetada Tabular

        .. image:: coluna_01.png

        .. image:: coluna_02.png

        .. image:: coluna_03.png

        .. image:: coluna_04.png

        .. image:: coluna_05.png
