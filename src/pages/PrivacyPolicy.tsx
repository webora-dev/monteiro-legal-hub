import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">
              Última atualização: Janeiro de 2025
            </p>
            <div className="h-1 w-24 bg-accent rounded-full" />
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Monteiro Advocacia, inscrita na OAB/RS, com sede em Porto Alegre, RS, 
              compromete-se com a proteção dos dados pessoais de seus clientes, parceiros 
              e visitantes do site, em conformidade com a Lei Geral de Proteção de Dados 
              Pessoais (Lei nº 13.709/2018 - LGPD).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Dados Coletados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Coletamos as seguintes categorias de dados pessoais:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Dados de identificação:</strong> nome completo, CPF/CNPJ (quando aplicável)</li>
              <li><strong>Dados de contato:</strong> e-mail, telefone/WhatsApp, endereço</li>
              <li><strong>Dados profissionais:</strong> cargo, empresa (quando aplicável)</li>
              <li><strong>Dados de navegação:</strong> endereço IP, cookies, páginas visitadas</li>
              <li><strong>Dados sensíveis:</strong> apenas quando estritamente necessário para a prestação do serviço jurídico e com consentimento expresso</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Finalidades do Tratamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Seus dados pessoais são tratados para as seguintes finalidades:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Prestação de serviços jurídicos contratados</li>
              <li>Comunicação sobre andamento de processos e consultas</li>
              <li>Agendamento de consultas e reuniões</li>
              <li>Envio de informações jurídicas relevantes (mediante consentimento)</li>
              <li>Cumprimento de obrigações legais e regulatórias</li>
              <li>Exercício regular de direitos em processos judiciais ou administrativos</li>
              <li>Melhoria da experiência do usuário no site</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Base Legal</h2>
            <p className="text-muted-foreground leading-relaxed">
              O tratamento de dados pessoais pela Monteiro Advocacia fundamenta-se nas seguintes bases legais:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Consentimento:</strong> quando você autoriza expressamente o tratamento</li>
              <li><strong>Execução de contrato:</strong> para prestação dos serviços contratados</li>
              <li><strong>Exercício regular de direitos:</strong> em processos judiciais e administrativos</li>
              <li><strong>Obrigação legal:</strong> cumprimento de normas da OAB e legislação aplicável</li>
              <li><strong>Legítimo interesse:</strong> para segurança e melhoria dos serviços</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Seus dados podem ser compartilhados com:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Tribunais e órgãos públicos, quando necessário ao exercício da advocacia</li>
              <li>Peritos, assistentes técnicos e outros profissionais necessários ao caso</li>
              <li>Prestadores de serviços (armazenamento em nuvem, e-mail, etc.) sob contrato de confidencialidade</li>
              <li>Autoridades competentes, mediante ordem judicial ou requisição legal</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Importante:</strong> Não vendemos, alugamos ou comercializamos seus dados pessoais.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Segurança dos Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas técnicas e organizacionais para proteger seus dados:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Controle de acesso restrito aos colaboradores autorizados</li>
              <li>Backup regular de informações</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Protocolos de resposta a incidentes de segurança</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Retenção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mantemos seus dados pessoais pelo tempo necessário para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Prestação dos serviços contratados</li>
              <li>Cumprimento de obrigações legais (prazo prescricional de 5 anos após encerramento do caso)</li>
              <li>Exercício de direitos em processos judiciais</li>
              <li>Requisitos do Código de Ética e Estatuto da OAB</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Após esses períodos, os dados serão anonimizados ou eliminados de forma segura.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">8. Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Você possui os seguintes direitos sobre seus dados pessoais:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Confirmação e acesso:</strong> saber se tratamos seus dados e acessá-los</li>
              <li><strong>Correção:</strong> solicitar correção de dados incompletos ou desatualizados</li>
              <li><strong>Anonimização, bloqueio ou eliminação:</strong> de dados desnecessários ou excessivos</li>
              <li><strong>Portabilidade:</strong> receber seus dados em formato estruturado</li>
              <li><strong>Eliminação:</strong> dos dados tratados com consentimento (salvo exceções legais)</li>
              <li><strong>Informação:</strong> sobre compartilhamento de dados com terceiros</li>
              <li><strong>Revogação do consentimento:</strong> a qualquer momento</li>
              <li><strong>Oposição:</strong> ao tratamento realizado sem consentimento</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Importante:</strong> Alguns direitos podem ter limitações em razão do sigilo profissional 
              e das obrigações éticas da advocacia.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">9. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos cookies para melhorar sua experiência de navegação. Você pode gerenciar 
              suas preferências de cookies nas configurações do navegador.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Tipos de cookies utilizados:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Essenciais:</strong> necessários para funcionamento do site</li>
              <li><strong>Analíticos:</strong> para compreender como você usa o site</li>
              <li><strong>Funcionais:</strong> para lembrar suas preferências</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">10. Menores de Idade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Não coletamos intencionalmente dados de menores de 18 anos sem consentimento dos pais 
              ou responsáveis legais. Em casos que envolvam menores (direito de família, por exemplo), 
              os dados são tratados com cuidado especial e apenas mediante autorização legal.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">11. Alterações na Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Esta Política de Privacidade pode ser atualizada periodicamente. A data da última 
              atualização é indicada no início deste documento. Recomendamos revisá-la regularmente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">12. Encarregado de Dados (DPO)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados pessoais, 
              entre em contato com nosso Encarregado de Dados:
            </p>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 mt-4">
              <p className="text-foreground"><strong>E-mail:</strong> privacidade@monteiroadvocacia.com.br</p>
              <p className="text-foreground"><strong>Telefone:</strong> +55 51 99888-7766</p>
              <p className="text-foreground"><strong>Horário:</strong> Segunda a Sexta, 9h às 18h</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">13. Autoridade Nacional</h2>
            <p className="text-muted-foreground leading-relaxed">
              Caso suas dúvidas não sejam solucionadas, você pode contatar a Autoridade Nacional 
              de Proteção de Dados (ANPD):
            </p>
            <p className="text-muted-foreground">
              <strong>Site:</strong>{" "}
              <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                www.gov.br/anpd
              </a>
            </p>
          </section>

          <div className="border-t border-border/50 pt-8 mt-12">
            <p className="text-sm text-muted-foreground text-center">
              Monteiro Advocacia - Compromisso com sua privacidade e segurança
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
