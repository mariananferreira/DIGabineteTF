# Fotografias originais da equipa

Cópias integrais, guardadas antes de qualquer tentativa de edição:

- `sara.jpeg`: fundo cinzento; requer recorte com transparência.
- `deb1.png`: tem canal alpha, mas o fundo branco continua opaco; requer recorte.
- `ines.jpeg`: Inês Leite, fundo branco; requer recorte.

Os ficheiros em `src/images/` continuam intactos. A fotografia `io.png`
(Inês Oliveira) já tem transparência e não precisa de remoção de fundo.
Joana, Cristiana e Mariana também já têm fundo transparente.

## Edição externa pendente

Remover apenas o fundo através de uma máscara, preservando os pixels da pessoa,
incluindo cabelo, rosto, roupa, mãos e acessórios. Exportar PNG RGBA com o mesmo
canvas, dimensões e posicionamento. Não aplicar filtros, retoques ou regeneração.
Usar depois os novos PNG nos imports de `OurTeam.jsx` e das páginas
`PsiSara.jsx`, `TerDebora.jsx` e `terines.jsx`. Todos estes contentores já usam
`#f8f3f0`; o enquadramento CSS da Sara depende de manter o canvas original.

Foi experimentada a ferramenta integrada imagegen com o seguinte prompt para
cada uma das três fotografias. Os resultados foram rejeitados porque alteram
características da pessoa e não foram integrados no site:

> Use case: background-extraction. Edit target: the provided professional portrait. Remove ONLY the gray/white wall background to genuine transparency. Preserve the exact original person, face, facial expression, teeth, eyes, hair including flyaways, skin texture, body proportions, pose, clothes, jewelry, hands and all clothing text pixel-faithfully. No retouching, beautification, relighting, color changes, filters or regeneration of person. Preserve original composition and full canvas; do not crop, enlarge or reposition the person. Transparent PNG cutout for website over #f8f3f0.
