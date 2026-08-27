const { Plugin } = require('obsidian');

module.exports = class EstudoAtivoPlugin extends Plugin {
    async onload() {
        console.log('Carregando plugin Estudo Ativo (Completo)');

        // ==========================================
        // 1. FORMATAÇÃO BÁSICA
        // ==========================================
        
        this.addCommand({
            id: 'estudo-ativo-negrito',
            name: 'Formatação: Negrito (**)',
            editorCallback: (editor, view) => {
                const selection = editor.getSelection();
                editor.replaceSelection(`**${selection || 'texto'}**`);
            }
        });

        this.addCommand({
            id: 'estudo-ativo-italico',
            name: 'Formatação: Itálico (*)',
            editorCallback: (editor, view) => {
                const selection = editor.getSelection();
                editor.replaceSelection(`*${selection || 'texto'}*`);
            }
        });

        this.addCommand({
            id: 'estudo-ativo-sublinhado',
            name: 'Formatação: Sublinhado (<u>)',
            editorCallback: (editor, view) => {
                const selection = editor.getSelection();
                editor.replaceSelection(`<u>${selection || 'texto'}</u>`);
            }
        });

        this.addCommand({
            id: 'estudo-ativo-destaque',
            name: 'Formatação: Destacar / Realçar (==)',
            editorCallback: (editor, view) => {
                const selection = editor.getSelection();
                editor.replaceSelection(`==${selection || 'texto'}==`);
            }
        });

        // ==========================================
        // 2. COMENTÁRIOS E NOTAS
        // ==========================================

        this.addCommand({
            id: 'estudo-ativo-comentario-obsidian',
            name: 'Anotação: Comentário Oculto Obsidian (%%)',
            editorCallback: (editor, view) => {
                const selection = editor.getSelection();
                editor.replaceSelection(`%% Comentário: ${selection || ''} %%`);
            }
        });

        this.addCommand({
            id: 'estudo-ativo-comentario-html',
            name: 'Anotação: Comentário Oculto HTML (<!-- -->)',
            editorCallback: (editor, view) => {
                const selection = editor.getSelection();
                editor.replaceSelection(`<!-- Comentário: ${selection || ''} -->`);
            }
        });

        this.addCommand({
            id: 'estudo-ativo-rodape',
            name: 'Anotação: Inserir Nota de Rodapé',
            editorCallback: (editor, view) => {
                const selection = editor.getSelection();
                const randomId = Math.floor(Math.random() * 10000);
                editor.replaceSelection(`${selection}[^${randomId}]\n\n[^${randomId}]: O seu comentário de rodapé aqui...`);
            }
        });

        // ==========================================
        // 3. CALLOUTS (CAIXAS VISUAIS DE DESTAQUE)
        // ==========================================
        
        const callouts = [
            { id: 'note', name: 'Nota Geral', icon: 'NOTE' },
            { id: 'info', name: 'Informação', icon: 'INFO' },
            { id: 'todo', name: 'Por Fazer', icon: 'TODO' },
            { id: 'warning', name: 'Dúvida / Atenção', icon: 'WARNING' },
            { id: 'important', name: 'Importante (Matéria de Exame)', icon: 'IMPORTANT' },
            { id: 'success', name: 'Compreendido', icon: 'SUCCESS' }
        ];

        callouts.forEach(c => {
            this.addCommand({
                id: `estudo-ativo-callout-${c.id}`,
                name: `Caixa de Destaque (Callout): ${c.name}`,
                editorCallback: (editor, view) => {
                    const selection = editor.getSelection();
                    const text = selection.length > 0 ? selection : 'Escreva a sua anotação aqui...';
                    editor.replaceSelection(`> [!${c.icon}] ${c.name}\n> ${text}\n`);
                }
            });
        });
    }

    onunload() {
        console.log('Descarregando plugin Estudo Ativo');
    }
}
