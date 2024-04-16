import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class UserDto {
  @IsNotEmpty({ message: 'Field first name must be added' })
  @IsString()
  firstName: string;

  @IsNotEmpty({ message: 'Field last name must be added' })
  @IsString()
  lastName: string;

  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  avatar?: string;
}
