import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerSupportDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly content: string;
}
