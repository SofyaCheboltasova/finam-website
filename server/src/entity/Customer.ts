import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Customer {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "varchar", nullable: false }) name: string;
  @Column({ type: "varchar", nullable: false }) surname: string;
  @Column({ type: "varchar", nullable: false }) phone: string;
  @Column({ type: "varchar", nullable: false }) email: string;
  @Column({ type: "varchar" }) telegram: string;
}

