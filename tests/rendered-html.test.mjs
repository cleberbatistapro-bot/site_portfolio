import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  assert.match(html, /Soluções criadas/i);
  assert.match(html, /organizar/i);
  assert.match(html, /processos/i);
  assert.match(html, /Ver projeto detalhado/i);
  assert.match(html, /Dashboard Operacional/i);
  assert.match(html, /Competências aplicadas/i);
  assert.match(html, /Conhecimento técnico/i);
  assert.match(html, /IA aplicada/i);
  assert.match(html, /Da análise à entrega/i);
  assert.match(html, /Método, organização e tecnologia/i);
  assert.match(html, /Testar e documentar/i);
  assert.match(html, /Vamos conversar sobre uma/i);
  assert.match(html, /contato@cleberbatistapro\.com\.br/i);
  assert.match(html, /Processos, dados e tecnologia aplicados/i);
  assert.match(html, /CNPJ: 41\.975\.192\/0001-62/i);
});

test("serves the dedicated about page", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("about-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/sobre-mim/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(await response.text(), /<title>Sobre mim \| Cleber Batista<\/title>/i);
});

test("serves the projects case study page", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("projects-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/projetos/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Projetos aplicados \| Cleber Batista<\/title>/i);
  assert.match(html, /Organizador de Arquivos/i);
});

test("serves the professional contact page", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("contacts-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/contatos/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Contato profissional \| Cleber Batista<\/title>/i);
  assert.match(html, /contato@cleberbatistapro\.com\.br/i);
  assert.match(html, /Tem uma oportunidade compatível com meu perfil\?/i);
});
