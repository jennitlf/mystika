// auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateCustomerDto } from 'src/shared/dtos/create-customer.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('customer/register')
  @ApiBody({
    description: 'Criação de usuário',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'Brandão Junior' },
        phone: { type: 'string', example: '99999-9999' },
        email: { type: 'string', example: 'usuario@exemplo.com' },
        password: { type: 'string', example: 'senha123' },
        status: { type: 'string', example: 'ativo' },
      },
    },
  })
  async register(@Body() body: CreateCustomerDto) {
    return this.authService.register(body);
  }

  @Post('customer/login')
  @ApiBody({
    description: 'Credenciais para login',
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'usuario@exemplo.com' },
        password: { type: 'string', example: 'senha123' },
      },
    },
  })
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new Error('Usuário ou senha incorreta');
    }
    return this.authService.login(user);
  }
}
