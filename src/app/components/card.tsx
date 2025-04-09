import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type PromptCardProps = {
    title: string;
    content: string;
    tags?: string[];
};

export default function PromptCard({ title, content, tags = [] }: PromptCardProps) {
    return (
        <div className="border rounded-xl p-4 shadow-sm bg-white space-y-2">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-600">{content}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                        {tag}
                    </Badge>
                ))}
            </div>
            <div className="text-right">
                <Button variant="outline" size="sm">
                    Copy
                </Button>
            </div>
        </div>
    );
}