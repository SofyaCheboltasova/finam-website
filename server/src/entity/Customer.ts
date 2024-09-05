import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Customer {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: false }) name: string;
  @Column({ nullable: false }) surname: string;
  @Column({ nullable: false }) phone: string;
  @Column({ nullable: false }) email: string;
  @Column() telegram: string;
}

