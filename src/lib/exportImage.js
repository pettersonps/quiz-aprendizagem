import html2canvas from 'html2canvas'

/**
 * Captura um elemento DOM e baixa como PNG via link temporário blob:.
 * @param {HTMLElement} node - elemento (cartão 9:16 em tamanho nativo 360x640)
 * @param {string} filename - nome do arquivo
 */
export async function downloadNodeAsPng(node, filename = 'meu-perfil-pedagogico.png') {
  // scale 3 => 1080 x 1920 px
  const canvas = await html2canvas(node, {
    scale: 3,
    backgroundColor: null,
    useCORS: true,
    logging: false,
  })

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'))
  if (!blob) throw new Error('Falha ao gerar a imagem.')

  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  // libera a memória após o início do download
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
