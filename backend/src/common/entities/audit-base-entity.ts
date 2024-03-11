import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
} from 'typeorm';

export default class AuditBaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    created_by_name: string;

    @Column()
    created_by_email: string;

    @Column()
    updated_by_name: string;

    @Column()
    updated_by_email: string;
}
