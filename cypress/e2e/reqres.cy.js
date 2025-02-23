describe('Testes API ReqRes', () => {

  const baseUrl = 'https://reqres.in/api';

  context('testes feitos para o CRUD de usuários', () => {
    it('Deve obter a lista de usuários', () => {
      cy.request('GET', `${baseUrl}/users?page=2`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.be.an('array');
      });
    });

    it('Deve criar um novo usuário', () => {
      cy.request('POST', `${baseUrl}/users`, {
        name: 'Test User',
        job: 'QA Engineer'
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('name', 'Test User');
      });
    });

    it('Deve atualizar um usuário', () => {
      cy.request('PUT', `${baseUrl}/users/2`, {
        name: 'Updated User',
        job: 'Developer'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Updated User');
      });
    });

    it('Deve deletar um usuário', () => {
      cy.request('DELETE', `${baseUrl}/users/2`).then((response) => {
        expect(response.status).to.eq(204);
      });
    });

  });
});
