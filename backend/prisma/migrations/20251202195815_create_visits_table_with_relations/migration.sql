-- CreateTable
CREATE TABLE "visitas" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "property_id" TEXT NOT NULL,
    "employee_id" TEXT,
    "visit_date" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "visitas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "visitas" ADD CONSTRAINT "visitas_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visitas" ADD CONSTRAINT "visitas_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "imoveis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visitas" ADD CONSTRAINT "visitas_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "funcionarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
