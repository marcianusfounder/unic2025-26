# 📡 Infraestrutura e Túneis (Dejavia)

Guia de portas locais mapeadas via túnel SSH e endereços públicos de produção para a plataforma Dejavia.

---

## 🛠️ Túnel de Desenvolvimento / Infraestrutura Local

Para gerenciar as portas locais e acessar os serviços em ambiente de desenvolvimento, utilize o script de gerenciamento:

```bash
# Abre as nove portas locais necessárias para desenvolvimento e monitoramento
./infra/producao/tunel.sh

# Apenas exibe o mapa de túneis ativos/configurados
./infra/producao/tunel.sh --listar
```

### 🗺️ Mapeamento de Portas Locais

| Porta Local | Serviço / Componente |
| :--- | :--- |
| **8888** | Easypanel |
| **5678** | n8n de desenvolvimento |
| **8000** | API de desenvolvimento |
| **5433 / 6380** | Postgres e Redis de desenvolvimento |
| **3001** | Uptime Kuma |
| **9443** | Portainer |
| **3004 / 3000** | Metabase, Grafana |

---

## 🌐 Ambiente de Produção (HTTPS Público)

O ambiente de produção não necessita de túnel, uma vez que painel, API, Keycloak, GlitchTip, n8n e o servidor MCP estão todos publicados em HTTPS público.

> [!NOTE]
> Todos os serviços listados abaixo rodam atrás do mesmo proxy reverso **Traefik**, com certificados automáticos gerados pelo **Let's Encrypt** e redirecionamento automático de `http` para `https` declarado individualmente nó a nó.

### Endereços e Status de Verificação

| Serviço | URL de Produção | Verificação / Validação |
| :--- | :--- | :--- |
| **Painel** | [dejavia.uc5pv8.easypanel.host](https://dejavia.uc5pv8.easypanel.host) | `200 OK` |
| **API** | [dejavia-api.uc5pv8.easypanel.host](https://dejavia-api.uc5pv8.easypanel.host) | `200 OK` na rota `/saude/vivo` |
| **Keycloak** | [dejavia-auth.uc5pv8.easypanel.host](https://dejavia-auth.uc5pv8.easypanel.host) | `200 OK` no OIDC discovery do realm `dejavia` |
| **GlitchTip** | [dejavia-erros.uc5pv8.easypanel.host](https://dejavia-erros.uc5pv8.easypanel.host) | `200 OK` |
| **n8n** | [dejavia-n8n.uc5pv8.easypanel.host](https://dejavia-n8n.uc5pv8.easypanel.host) | `200 OK` na rota `/healthz` |
| **Servidor MCP** | [dejavia-n8n.uc5pv8.easypanel.host/mcp/dejavia-mcp](https://dejavia-n8n.uc5pv8.easypanel.host/mcp/dejavia-mcp) | `403 Forbidden` sem token (8 ferramentas disponíveis com token) |

 Repor a password certa

  1. Vai a https://dejavia-auth.uc5pv8.easypanel.host/admin/master/console/
  2. Entra com admin / a password que já usaste com sucesso (a do KEYCLOAK_ADMIN_PASSWORD).
  3. Este é o passo que provavelmente falhou da última vez: no canto superior esquerdo há um selector de realm, que abre a mostrar "master". Clica nele e
  muda para "dejavia". Se não fizeres isto, tudo o que editares a seguir é a conta errada — o admin do master, não o admin da aplicação.
  4. Com o realm já em "dejavia", vai ao menu lateral Users.
  5. Clica no utilizador admin (só deve haver um, neste realm).
  6. Separador Credentials.
  7. Botão Set password (ou "Reset password", dependendo da versão).
  8. Escreve uma password nova, repete-a, e desliga o interruptor "Temporary" antes de gravar — se ficar ligado, o Keycloak força uma troca de password no
  primeiro login, o que noutro fluxo (o dejavia-painel usa código de autorização, não formulário directo) pode dar um erro confuso em vez de te deixar
  mudar.
  9. Guarda.

  Entrar na aplicação a sério

  Depois disso, esquece o Keycloak — não se entra por lá directamente. Entra-se pela aplicação:

  10. https://dejavia.uc5pv8.easypanel.host
  11. Ele próprio te redirecciona para o Keycloak a pedir login.
  12. admin / a password nova que acabaste de definir.
  13. Volta automaticamente para o painel — dashboard do refeitório, RH, etc., conforme o papel dessa conta.
---
*Última atualização: 14 de agosto de 2026*


Produção está a correr (3000/8000/5432/5678, tudo em loopback) e há infra de dados de demonstração.

Como se desbloqueia

  grep ^KEYCLOAK_ADMIN_PASSWORD= ~/dejavia-prod/.env | cut -d= -f2-   # master, utilizador admin
  grep ^DEJAVIA_ADMIN_PASSWORD=  ~/dejavia-prod/.env | cut -d= -f2-   # painel, utilizador admin

  As contas por papel estão em ~/dejavia-prod/contas-por-papel.txt (verificadas, as três entram). Apague a entrada guardada no navegador para
  dejavia-auth.uc5pv8.easypanel.host antes de tentar, senão o autofill volta a pôr lá a velha.
