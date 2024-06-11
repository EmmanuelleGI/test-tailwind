import React from 'react';
import PageHeading from "../components/PageHeading";
import { Table, 
        TableBody, 
        TableCell, 
        TableHead, 
        TableHeader, 
        TableRow } from '../components/tailwind/table'
import { Dropdown, 
        DropdownButton, 
        DropdownItem, 
        DropdownMenu } from '../components/tailwind/dropdown'
import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid'



export default function Templates() {
  const handleAction = () => {
    console.log("Action button clicked");
  };

  const templates = [
    {
      name: "Template 1",
      category: "Category A",
      createdDate: "2023-01-01",
      status: "Aprouved",
    },
    {
      name: "Template 2",
      category: "Category B",
      createdDate: "2023-02-15",
      status: "Aprouved",
    },
    {
      name: "Template 3",
      category: "Category A",
      createdDate: "2023-03-10",
      status: "Aprouved",
    },
    {
      name: "Template 4",
      category: "Category C",
      createdDate: "2023-04-20",
      status: "Rejected",
    },
    // Ajoutez d'autres templates ici
  ];

  return (
    <>
      <PageHeading
        title="Templates"
        action="Create a template"
        handleAction={handleAction}
      />


      <Table className="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]">
        <TableHead>
            <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Category</TableHeader>
            <TableHeader>Creation Date</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
            </TableRow>
        </TableHead>
        <TableBody>
            {templates.map((template) => (
            <TableRow key={template.name} href={template.url}>
                <TableCell className="font-custom">{template.name}</TableCell>
                <TableCell>{template.category}</TableCell>
                <TableCell className="text-zinc-500">{template.createdDate}</TableCell>
                <TableCell className="text-zinc-500">{template.status}</TableCell>

                <TableCell>
              <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                <Dropdown>
                  <DropdownButton plain aria-label="More options">
                    <EllipsisHorizontalIcon />
                  </DropdownButton>
                  <DropdownMenu anchor="bottom end">
                    <DropdownItem>View</DropdownItem>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </TableCell>

            </TableRow>
            ))}
        </TableBody>
      </Table>
    </>



      
 
  );
}
