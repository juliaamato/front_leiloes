import { Component } from '@angular/core';
import { Imovel } from './imovel.model';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrl: './imoveis.component.css'
})
export class ImoveisComponent {
  imoveis: Imovel[] = [new Imovel('Casa na Rua Xingu', 'https://www.santanderimoveis.com.br/wp-content/uploads/2021/12/4e047791-7a8f-7406-3395-5e220175ce04-1.jpg', 92000, 58, 38640, 'Rua, Xingu,, 115,, Amendoeira,, São, Gonçalo, -, RJ., CEP:, 24730580', 'https://www.santanderimoveis.com.br/venda/imovel/casa-a-venda-na-rua-xingu-sao-goncalo-rj-codigo-9152-santander-imoveis/', true, null, true, true, 300, 'Casa' ),
  new Imovel('Casa na Rua Xingu', 'https://www.santanderimoveis.com.br/wp-content/uploads/2021/12/4e047791-7a8f-7406-3395-5e220175ce04-1.jpg', 92000, 58, 38640, 'Rua, Xingu,, 115,, Amendoeira,, São, Gonçalo, -, RJ., CEP:, 24730580', 'https://www.santanderimoveis.com.br/venda/imovel/casa-a-venda-na-rua-xingu-sao-goncalo-rj-codigo-9152-santander-imoveis/', true, null, true, true, 300, 'Casa' ),
  new Imovel('Casa na Rua Xingu', 'https://www.santanderimoveis.com.br/wp-content/uploads/2021/12/4e047791-7a8f-7406-3395-5e220175ce04-1.jpg', 92000, 58, 38640, 'Rua, Xingu,, 115,, Amendoeira,, São, Gonçalo, -, RJ., CEP:, 24730580', 'https://www.santanderimoveis.com.br/venda/imovel/casa-a-venda-na-rua-xingu-sao-goncalo-rj-codigo-9152-santander-imoveis/', true, null, true, true, 300, 'Casa' ),
  new Imovel('Casa na Rua Xingu', 'https://www.santanderimoveis.com.br/wp-content/uploads/2021/12/4e047791-7a8f-7406-3395-5e220175ce04-1.jpg', 92000, 58, 38640, 'Rua, Xingu,, 115,, Amendoeira,, São, Gonçalo, -, RJ., CEP:, 24730580', 'https://www.santanderimoveis.com.br/venda/imovel/casa-a-venda-na-rua-xingu-sao-goncalo-rj-codigo-9152-santander-imoveis/', true, null, true, true, 300, 'Casa' ),
  new Imovel('Casa na Rua Xingu', 'https://www.santanderimoveis.com.br/wp-content/uploads/2021/12/4e047791-7a8f-7406-3395-5e220175ce04-1.jpg', 92000, 58, 38640, 'Rua, Xingu,, 115,, Amendoeira,, São, Gonçalo, -, RJ., CEP:, 24730580', 'https://www.santanderimoveis.com.br/venda/imovel/casa-a-venda-na-rua-xingu-sao-goncalo-rj-codigo-9152-santander-imoveis/', true, null, true, true, 300, 'Casa' ),
  new Imovel('Casa na Rua Xingu', 'https://www.santanderimoveis.com.br/wp-content/uploads/2021/12/4e047791-7a8f-7406-3395-5e220175ce04-1.jpg', 92000, 58, 38640, 'Rua, Xingu,, 115,, Amendoeira,, São, Gonçalo, -, RJ., CEP:, 24730580', 'https://www.santanderimoveis.com.br/venda/imovel/casa-a-venda-na-rua-xingu-sao-goncalo-rj-codigo-9152-santander-imoveis/', true, null, true, true, 300, 'Casa' ),
  new Imovel('Casa na Rua Xingu', 'https://www.santanderimoveis.com.br/wp-content/uploads/2021/12/4e047791-7a8f-7406-3395-5e220175ce04-1.jpg', 92000, 58, 38640, 'Rua, Xingu,, 115,, Amendoeira,, São, Gonçalo, -, RJ., CEP:, 24730580', 'https://www.santanderimoveis.com.br/venda/imovel/casa-a-venda-na-rua-xingu-sao-goncalo-rj-codigo-9152-santander-imoveis/', true, null, true, true, 300, 'Casa' ),
  new Imovel('Casa na Rua Xingu', 'https://www.santanderimoveis.com.br/wp-content/uploads/2021/12/4e047791-7a8f-7406-3395-5e220175ce04-1.jpg', 92000, 58, 38640, 'Rua, Xingu,, 115,, Amendoeira,, São, Gonçalo, -, RJ., CEP:, 24730580', 'https://www.santanderimoveis.com.br/venda/imovel/casa-a-venda-na-rua-xingu-sao-goncalo-rj-codigo-9152-santander-imoveis/', true, null, true, true, 300, 'Casa' ),
  new Imovel('Casa na Rua Xingu', 'https://www.santanderimoveis.com.br/wp-content/uploads/2021/12/4e047791-7a8f-7406-3395-5e220175ce04-1.jpg', 92000, 58, 38640, 'Rua, Xingu,, 115,, Amendoeira,, São, Gonçalo, -, RJ., CEP:, 24730580', 'https://www.santanderimoveis.com.br/venda/imovel/casa-a-venda-na-rua-xingu-sao-goncalo-rj-codigo-9152-santander-imoveis/', true, null, true, true, 300, 'Casa' ),
  new Imovel('Casa na Rua Xingu', 'https://www.santanderimoveis.com.br/wp-content/uploads/2021/12/4e047791-7a8f-7406-3395-5e220175ce04-1.jpg', 92000, 58, 38640, 'Rua, Xingu,, 115,, Amendoeira,, São, Gonçalo, -, RJ., CEP:, 24730580', 'https://www.santanderimoveis.com.br/venda/imovel/casa-a-venda-na-rua-xingu-sao-goncalo-rj-codigo-9152-santander-imoveis/', true, null, true, true, 300, 'Casa' ),];
}
